-- Seed Categories
INSERT INTO public.categories (name, slug, is_active, display_order)
VALUES 
    ('Supplement Gummies', 'supplement-gummies', true, 1),
    ('Herbal Wellness', 'herbal-wellness', true, 2),
    ('Feminine Hygiene & Intimate Care', 'feminine-hygiene', true, 3),
    ('Beauty & Self-Care', 'beauty-and-self-care', true, 4),
    ('Weight Management', 'weight-management', true, 5)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, is_active = EXCLUDED.is_active;

-- Seed Products
-- Note: All products seeded as unpublished, price=0, is_bestseller=false, is_featured=false per Gate 1 requirements
INSERT INTO public.products (name, slug, sku, price, is_published, is_bestseller, is_featured)
VALUES 
    -- Supplement Gummies
    ('Glutathione 13-in-1 Gummies', 'glutathione-13-in-1-gummies', 'SKU-GLU13-GUM', 0.00, false, false, false),
    ('L-Glutathione', 'l-glutathione', 'SKU-L-GLU', 0.00, false, false, false),
    ('Evening Primrose Oil', 'evening-primrose-oil', 'SKU-EPO', 0.00, false, false, false),
    ('Cranberry', 'cranberry', 'SKU-CRAN', 0.00, false, false, false),
    ('Probiotic', 'probiotic', 'SKU-PROB', 0.00, false, false, false),
    ('Collagen', 'collagen', 'SKU-COL', 0.00, false, false, false),
    ('Horny Goat Weed Man Power', 'horny-goat-weed-man-power', 'SKU-HGW-MP', 0.00, false, false, false),
    ('Kito + ACV Weight Loss', 'kito-acv-weight-loss', 'SKU-KITO-ACV', 0.00, false, false, false),
    ('Apple Cider Vinegar Gummies', 'apple-cider-vinegar-gummies', 'SKU-ACV-GUM', 0.00, false, false, false),
    
    -- Herbal Wellness
    ('Weight Loss Teas', 'weight-loss-teas', 'SKU-WL-TEAS', 0.00, false, false, false),
    ('Maca Powder', 'maca-powder', 'SKU-MACA-POW', 0.00, false, false, false),
    ('Maca + Booty Tea', 'maca-booty-tea', 'SKU-MACA-BTEA', 0.00, false, false, false),
    
    -- Feminine Hygiene & Intimate Care
    ('Nelo''s Intimate Wash', 'nelos-intimate-wash', 'SKU-NEL-IWASH', 0.00, false, false, false),
    ('Yoni Oil', 'yoni-oil', 'SKU-YONI-OIL', 0.00, false, false, false),
    ('WAP Drip', 'wap-drip', 'SKU-WAP-DRIP', 0.00, false, false, false),
    ('Vagina Tightening Gel', 'vagina-tightening-gel', 'SKU-VTG', 0.00, false, false, false),
    ('Boric Acid Gel', 'boric-acid-gel', 'SKU-BAG', 0.00, false, false, false),
    ('Feminine Steaming Herbs', 'feminine-steaming-herbs', 'SKU-FSH', 0.00, false, false, false),
    ('Foldable Feminine Steaming Seats', 'foldable-feminine-steaming-seats', 'SKU-FFSS', 0.00, false, false, false)
ON CONFLICT (slug) DO UPDATE 
SET name = EXCLUDED.name, 
    price = EXCLUDED.price, 
    is_published = EXCLUDED.is_published,
    is_bestseller = EXCLUDED.is_bestseller,
    is_featured = EXCLUDED.is_featured;

-- Map Products to Categories
-- Use DO NOTHING on conflict since product_categories has a compound primary key (product_id, category_id)
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
