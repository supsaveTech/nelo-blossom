-- Seed Categories
INSERT INTO public.categories (name, slug, description, image_url, is_active, display_order)
VALUES 
    ('Supplement Gummies', 'supplement-gummies', 'Delicious and effective gummies to support your daily wellness goals.', null, true, 1),
    ('Herbal Wellness', 'herbal-wellness', 'Natural herbal teas and powders to revitalize your body and mind.', null, true, 2),
    ('Feminine Hygiene & Intimate Care', 'feminine-hygiene', 'Gentle, pH-balanced products designed specifically for intimate wellness.', null, true, 3),
    ('Beauty & Self-Care', 'beauty-and-self-care', 'Premium skincare and beauty essentials for a radiant glow.', null, true, 4),
    ('Weight Management', 'weight-management', 'Targeted solutions to support your healthy weight journey.', null, true, 5)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, description = EXCLUDED.description, is_active = EXCLUDED.is_active, image_url = EXCLUDED.image_url;

-- Seed Products
-- Seeded with temporary professional data, prices, and published state to populate the storefront.
INSERT INTO public.products (name, slug, sku, price, sale_price, is_published, is_bestseller, is_featured, description)
VALUES 
    -- Supplement Gummies
    ('Glutathione 13-in-1 Gummies', 'glutathione-13-in-1-gummies', 'SKU-GLU13-GUM', 22000.00, 18500.00, true, true, true, 'A powerful blend of 13 essential vitamins and antioxidants in one delicious gummy to promote overall health and radiant skin.'),
    ('L-Glutathione', 'l-glutathione', 'SKU-L-GLU', 15000.00, null, true, false, false, 'High-absorption L-Glutathione supplements designed to support immune function and healthy skin.'),
    ('Evening Primrose Oil', 'evening-primrose-oil', 'SKU-EPO', 15000.00, 12500.00, true, true, false, 'Rich in omega-6 fatty acids to help maintain hormonal balance and nourish healthy skin.'),
    ('Cranberry', 'cranberry', 'SKU-CRAN', 9000.00, null, true, false, false, 'Concentrated cranberry extract to support urinary tract health and provide powerful antioxidant benefits.'),
    ('Probiotic', 'probiotic', 'SKU-PROB', 14000.00, null, true, true, false, 'Advanced probiotic formula to support digestive balance and a strong immune system.'),
    ('Collagen', 'collagen', 'SKU-COL', 18000.00, 16500.00, true, true, true, 'Hydrolyzed collagen peptides for healthy hair, strong nails, and youthful, glowing skin.'),
    ('Horny Goat Weed Man Power', 'horny-goat-weed-man-power', 'SKU-HGW-MP', 15500.00, null, true, false, false, 'A natural herbal supplement formulated to support energy, stamina, and vitality.'),
    ('Kito + ACV Weight Loss', 'kito-acv-weight-loss', 'SKU-KITO-ACV', 20000.00, 17000.00, true, true, false, 'A synergistic blend of Keto support and Apple Cider Vinegar to aid in weight management and metabolic health.'),
    ('Apple Cider Vinegar Gummies', 'apple-cider-vinegar-gummies', 'SKU-ACV-GUM', 11000.00, null, true, false, true, 'The benefits of ACV without the taste. Great for digestion, energy, and detoxification.'),
    
    -- Herbal Wellness
    ('Weight Loss Teas', 'weight-loss-teas', 'SKU-WL-TEAS', 10000.00, 8500.00, true, true, false, 'A carefully selected blend of herbs to support metabolism and natural detoxification.'),
    ('Maca Powder', 'maca-powder', 'SKU-MACA-POW', 9500.00, null, true, false, false, 'Premium organic Maca root powder to support energy levels, hormonal balance, and vitality.'),
    ('Maca + Booty Tea', 'maca-booty-tea', 'SKU-MACA-BTEA', 15000.00, 12000.00, true, true, true, 'Our signature herbal tea blend combined with Maca root to support feminine curves and wellness.'),
    
    -- Feminine Hygiene & Intimate Care
    ('Nelo''s Intimate Wash', 'nelos-intimate-wash', 'SKU-NEL-IWASH', 6500.00, null, true, true, true, 'A gentle, pH-balanced intimate wash formulated to cleanse, refresh, and maintain natural flora.'),
    ('Yoni Oil', 'yoni-oil', 'SKU-YONI-OIL', 8000.00, null, true, true, false, 'A soothing blend of natural essential oils to moisturize, calm, and protect intimate skin.'),
    ('WAP Drip', 'wap-drip', 'SKU-WAP-DRIP', 9500.00, null, true, false, false, 'A specialized feminine care formula designed for intimate comfort and confidence.'),
    ('Vagina Tightening Gel', 'vagina-tightening-gel', 'SKU-VTG', 14000.00, 12000.00, true, false, false, 'A targeted gel formula formulated with natural extracts for intimate wellness and confidence.'),
    ('Boric Acid Gel', 'boric-acid-gel', 'SKU-BAG', 11000.00, null, true, true, false, 'Professional-grade boric acid gel to support natural pH balance and vaginal health.'),
    ('Feminine Steaming Herbs', 'feminine-steaming-herbs', 'SKU-FSH', 7500.00, null, true, false, true, 'A traditional blend of soothing herbs designed for a relaxing and cleansing yoni steam experience.'),
    ('Foldable Feminine Steaming Seats', 'foldable-feminine-steaming-seats', 'SKU-FFSS', 18000.00, 15000.00, true, true, false, 'A convenient, easy-to-store seat perfectly designed for your at-home feminine steaming rituals.')
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, 
    price = EXCLUDED.price,
    sale_price = EXCLUDED.sale_price,
    is_published = EXCLUDED.is_published,
    is_bestseller = EXCLUDED.is_bestseller,
    is_featured = EXCLUDED.is_featured,
    description = EXCLUDED.description;

-- Map Products to Categories
INSERT INTO public.product_categories (product_id, category_id)
SELECT p.id, c.id
FROM public.products p
JOIN public.categories c ON c.slug = 'supplement-gummies'
WHERE p.slug IN (
    'glutathione-13-in-1-gummies',
    'l-glutathione',
    'evening-primrose-oil',
    'cranberry',
    'probiotic',
    'collagen',
    'horny-goat-weed-man-power',
    'kito-acv-weight-loss',
    'apple-cider-vinegar-gummies'
)
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO public.product_categories (product_id, category_id)
SELECT p.id, c.id
FROM public.products p
JOIN public.categories c ON c.slug = 'herbal-wellness'
WHERE p.slug IN (
    'weight-loss-teas',
    'maca-powder',
    'maca-booty-tea'
)
ON CONFLICT (product_id, category_id) DO NOTHING;

INSERT INTO public.product_categories (product_id, category_id)
SELECT p.id, c.id
FROM public.products p
JOIN public.categories c ON c.slug = 'feminine-hygiene'
WHERE p.slug IN (
    'nelos-intimate-wash',
    'yoni-oil',
    'wap-drip',
    'vagina-tightening-gel',
    'boric-acid-gel',
    'feminine-steaming-herbs',
    'foldable-feminine-steaming-seats'
)
ON CONFLICT (product_id, category_id) DO NOTHING;

-- Seed temporary professional testimonials
INSERT INTO public.testimonials (customer_name, content, rating, is_published, display_order)
VALUES 
    ('Amara O.', 'The Glutathione gummies have completely transformed my skin. I feel so much more confident and radiant. Delivery was also incredibly fast!', 5, true, 1),
    ('Jennifer K.', 'I''ve been using Nelo''s Intimate Wash for a month now and it is the most gentle and refreshing product I''ve tried. Highly recommend.', 5, true, 2),
    ('Blessing A.', 'The Weight Loss Tea combined with the ACV gummies really helped me kickstart my wellness journey. Great quality products from a brand that cares.', 4, true, 3)
ON CONFLICT DO NOTHING;

-- Seed Inventory
INSERT INTO public.inventory (product_id, quantity)
SELECT id, 50 FROM public.products
ON CONFLICT (product_id) DO UPDATE SET quantity = EXCLUDED.quantity;
