export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: 'UI_KITS' as const,
        details: [
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: 'Best Sellers',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg'
            }
        ]
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        details: [
            {
                name: 'Favorite Icon Picks',
                href: '#',
                imageSrc: '/nav/icons/picks.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/icons/new.jpg'
            },
            {
                name: 'Best Selling Icons',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpg'
            }
        ]
    }
]