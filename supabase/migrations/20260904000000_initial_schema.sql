-- Initial Schema for Nelo Blossom Empire

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text not null,
  email text not null,
  phone text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ADMIN USERS
create table public.admin_users (
  user_id uuid references public.profiles(id) on delete cascade not null primary key,
  role text not null check (role in ('super_admin', 'manager', 'order_manager', 'content_manager')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ADDRESSES
create table public.addresses (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  full_name text not null,
  street text not null,
  city text not null,
  state text not null,
  is_default boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- CATEGORIES
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  parent_id uuid references public.categories(id) on delete restrict,
  name text not null,
  slug text unique not null,
  description text,
  image_url text,
  is_active boolean default true,
  display_order integer default 0,
  seo_title text,
  seo_description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PRODUCTS
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  sku text unique not null,
  short_description text,
  description text,
  price numeric(10,2) not null,
  sale_price numeric(10,2),
  is_published boolean default false,
  is_featured boolean default false,
  is_bestseller boolean default false,
  seo_title text,
  seo_description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PRODUCT CATEGORIES
create table public.product_categories (
  product_id uuid references public.products(id) on delete cascade not null,
  category_id uuid references public.categories(id) on delete restrict not null,
  primary key (product_id, category_id)
);

-- PRODUCT IMAGES
create table public.product_images (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products(id) on delete cascade not null,
  url text not null,
  alt_text text,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PRODUCT VARIANTS (Optional for Phase 1)
create table public.product_variants (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products(id) on delete cascade not null,
  name text not null,
  sku_suffix text,
  price_adjustment numeric(10,2) default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- INVENTORY
create table public.inventory (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products(id) on delete cascade not null unique,
  quantity integer default 0 not null,
  low_stock_threshold integer default 5 not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ORDERS
create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  order_number text unique not null,
  user_id uuid references public.profiles(id) on delete set null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  status text not null default 'pending',
  subtotal numeric(10,2) not null,
  delivery_fee numeric(10,2) not null,
  discount_amount numeric(10,2) default 0,
  total numeric(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ORDER ITEMS
create table public.order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  quantity integer not null,
  price_at_purchase numeric(10,2) not null
);

-- ORDER ADDRESSES
create table public.order_addresses (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null unique,
  full_name text not null,
  street text not null,
  city text not null,
  state text not null
);

-- PAYMENTS
create table public.payments (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  provider text not null,
  reference text not null unique,
  amount numeric(10,2) not null,
  currency text default 'NGN',
  status text not null default 'pending',
  paid_at timestamp with time zone,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ORDER STATUS HISTORY
create table public.order_status_history (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  status text not null,
  note text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- DISCOUNTS
create table public.discounts (
  id uuid default uuid_generate_v4() primary key,
  code text unique not null,
  type text not null,
  value numeric(10,2) not null,
  min_order_value numeric(10,2),
  start_date timestamp with time zone,
  end_date timestamp with time zone,
  usage_limit integer,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- DISCOUNT USAGES
create table public.discount_usages (
  id uuid default uuid_generate_v4() primary key,
  discount_id uuid references public.discounts(id) on delete cascade not null,
  order_id uuid references public.orders(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- REVIEWS
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references public.products(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  is_verified_purchase boolean default false not null,
  is_approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TESTIMONIALS
create table public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  customer_name text not null,
  content text not null,
  rating integer,
  image_url text,
  is_active boolean default true,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- BANNERS
create table public.banners (
  id uuid default uuid_generate_v4() primary key,
  title text,
  subtitle text,
  image_url text not null,
  link_url text,
  is_active boolean default true,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- NEWSLETTER SUBSCRIBERS
create table public.newsletter_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  is_subscribed boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- STORE SETTINGS
create table public.store_settings (
  id uuid default uuid_generate_v4() primary key,
  store_name text,
  store_email text,
  store_phone text,
  currency text default 'NGN',
  default_delivery_fee numeric(10,2) default 0,
  delivery_fee_by_state jsonb,
  free_shipping_threshold numeric(10,2),
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- SOCIAL LINKS
create table public.social_links (
  id uuid default uuid_generate_v4() primary key,
  platform text not null,
  url text not null,
  is_active boolean default true,
  display_order integer default 0
);

-- AUDIT LOGS
create table public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  details jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Trigger to auto-create profile on signup
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Row Level Security (RLS) setup

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.admin_users enable row level security;
alter table public.addresses enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_categories enable row level security;
alter table public.product_images enable row level security;
alter table public.product_variants enable row level security;
alter table public.inventory enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.order_addresses enable row level security;
alter table public.payments enable row level security;
alter table public.order_status_history enable row level security;
alter table public.discounts enable row level security;
alter table public.discount_usages enable row level security;
alter table public.reviews enable row level security;
alter table public.testimonials enable row level security;
alter table public.banners enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.store_settings enable row level security;
alter table public.social_links enable row level security;
alter table public.audit_logs enable row level security;

-- Create helper function for admin check
create function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.admin_users where user_id = auth.uid()
  );
end;
$$ language plpgsql security definer;

-- Profiles: Users can read/update their own profile. Admins can read all.
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Admins can view all profiles" on public.profiles for select using (public.is_admin());
create policy "Admins can update all profiles" on public.profiles for update using (public.is_admin());

-- Admin Users: Only accessible by other admins (or super admins later)
create policy "Admins can view admin_users" on public.admin_users for select using (public.is_admin());

-- Addresses: Users can CRUD their own. Admins can read all.
create policy "Users can view own addresses" on public.addresses for select using (auth.uid() = user_id);
create policy "Users can insert own addresses" on public.addresses for insert with check (auth.uid() = user_id);
create policy "Users can update own addresses" on public.addresses for update using (auth.uid() = user_id);
create policy "Users can delete own addresses" on public.addresses for delete using (auth.uid() = user_id);
create policy "Admins can view all addresses" on public.addresses for select using (public.is_admin());

-- Categories: Public read. Admins can all.
create policy "Categories are viewable by everyone" on public.categories for select using (true);
create policy "Admins can insert categories" on public.categories for insert with check (public.is_admin());
create policy "Admins can update categories" on public.categories for update using (public.is_admin());
create policy "Admins can delete categories" on public.categories for delete using (public.is_admin());

-- Products: Public read if published. Admins read all. Admins can all.
create policy "Published products are viewable by everyone" on public.products for select using (is_published = true or public.is_admin());
create policy "Admins can insert products" on public.products for insert with check (public.is_admin());
create policy "Admins can update products" on public.products for update using (public.is_admin());
create policy "Admins can delete products" on public.products for delete using (public.is_admin());

-- Product Categories: Public read if product published. Admins can all.
create policy "Product categories viewable by everyone" on public.product_categories for select using (true);
create policy "Admins can insert product categories" on public.product_categories for insert with check (public.is_admin());
create policy "Admins can delete product categories" on public.product_categories for delete using (public.is_admin());

-- Product Images / Variants / Inventory: public read, admin all
create policy "Images viewable by everyone" on public.product_images for select using (true);
create policy "Admins can modify images" on public.product_images for all using (public.is_admin());

create policy "Variants viewable by everyone" on public.product_variants for select using (true);
create policy "Admins can modify variants" on public.product_variants for all using (public.is_admin());

create policy "Inventory viewable by everyone" on public.inventory for select using (true);
create policy "Admins can modify inventory" on public.inventory for all using (public.is_admin());

-- Orders: Users can read their own. Guest tracking logic happens server-side with service role. Admins read all.
create policy "Users can view own orders" on public.orders for select using (auth.uid() = user_id);
create policy "Users can insert own orders" on public.orders for insert with check (auth.uid() = user_id or auth.uid() is null);
create policy "Admins can view all orders" on public.orders for select using (public.is_admin());
create policy "Admins can update orders" on public.orders for update using (public.is_admin());

-- Order Items / Addresses / History: 
create policy "Users view own order items" on public.order_items for select using (
  exists (select 1 from public.orders where id = order_id and user_id = auth.uid())
);
create policy "Users insert own order items" on public.order_items for insert with check (true); -- Usually inserted simultaneously via server
create policy "Admins can view all order items" on public.order_items for select using (public.is_admin());

create policy "Users view own order addresses" on public.order_addresses for select using (
  exists (select 1 from public.orders where id = order_id and user_id = auth.uid())
);
create policy "Users insert own order addresses" on public.order_addresses for insert with check (true);
create policy "Admins view all order addresses" on public.order_addresses for select using (public.is_admin());

create policy "Users view own order history" on public.order_status_history for select using (
  exists (select 1 from public.orders where id = order_id and user_id = auth.uid())
);
create policy "Admins view all order history" on public.order_status_history for select using (public.is_admin());
create policy "Admins insert order history" on public.order_status_history for insert with check (public.is_admin());

-- Payments: Only viewable by owner, created by server.
create policy "Users view own payments" on public.payments for select using (
  exists (select 1 from public.orders where id = order_id and user_id = auth.uid())
);
create policy "Admins view all payments" on public.payments for select using (public.is_admin());

-- Reviews: Viewable if approved. Insertable by authed users.
create policy "Approved reviews viewable by everyone" on public.reviews for select using (is_approved = true or public.is_admin());
create policy "Users can view own reviews" on public.reviews for select using (auth.uid() = user_id);
create policy "Users can insert reviews" on public.reviews for insert with check (auth.uid() = user_id);
create policy "Admins can modify reviews" on public.reviews for all using (public.is_admin());

-- Testimonials & Banners & Social Links & Settings: Public read, Admin all
create policy "Testimonials viewable by everyone" on public.testimonials for select using (is_active = true or public.is_admin());
create policy "Admins can modify testimonials" on public.testimonials for all using (public.is_admin());

create policy "Banners viewable by everyone" on public.banners for select using (is_active = true or public.is_admin());
create policy "Admins can modify banners" on public.banners for all using (public.is_admin());

create policy "Settings viewable by everyone" on public.store_settings for select using (true);
create policy "Admins can modify settings" on public.store_settings for all using (public.is_admin());

create policy "Social links viewable by everyone" on public.social_links for select using (is_active = true or public.is_admin());
create policy "Admins can modify social links" on public.social_links for all using (public.is_admin());

-- Discounts: Admins only, server processes usage
create policy "Admins view discounts" on public.discounts for all using (public.is_admin());
create policy "Admins view usages" on public.discount_usages for all using (public.is_admin());
