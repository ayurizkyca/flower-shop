// benefit data
export const featureData = [
    {
        id: 1,
        title: "Stylish bouquets by florists",
        description:
            "At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.",
    },
    {
        id: 2,
        title: "On-time delivery",
        description:
            "Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.",
    },
    {
        id: 3,
        title: "Safe payment",
        description:
            "You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.",
    },
    {
        id: 4,
        title: "Subscription by your needs",
        description:
            "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.",
    },
];

// category data
export interface CategoryData {
    id: number;
    title: string;
    image: string;
    reverse?: boolean;
}

export const categoryData: CategoryData[] = [
    {
        id: 1,
        title: "Fresh Flowers",
        image: "src/assets/image/card-item.png",
        reverse: true,
    },
    {
        id: 2,
        title: "Dried Flowers",
        image: "src/assets/image/card-item-1.png",
        reverse: false,
    },
    {
        id: 3,
        title: "Live Plants",
        image: "src/assets/image/card-item-2.png",
        reverse: true,
    },
    {
        id: 4,
        title: "Aroma Candles",
        image: "src/assets/image/card-item-3.png",
        reverse: false,
    },
    {
        id: 5,
        title: "Fresheners",
        image: "src/assets/image/card-item-4.png",
        reverse: true,
    },
];

// image category
export const freshFlowers = [
    {
        id: 1,
        image: "src/assets/image/fresh-flower.png"
    },
    {
        id: 2,
        image: "src/assets/image/fresh-flower-1.png"
    },
    {
        id: 3,
        image: "src/assets/image/fresh-flower-2.png"
    },
    {
        id: 4,
        image: "src/assets/image/fresh-flower-3.png"
    },
    {
        id: 5,
        image: "src/assets/image/fresh-flower-4.png"
    },
    {
        id: 6,
        image: "src/assets/image/fresh-flower-5.png"
    },
    {
        id: 7,
        image: "src/assets/image/fresh-flower-6.png"
    },
    {
        id: 8,
        image: "src/assets/image/fresh-flower-7.png"
    },
    {
        id: 9,
        image: "src/assets/image/fresh-flower-8.png"
    },
    {
        id: 10,
        image: "src/assets/image/fresh-flower-9.png"
    },
]

// about data
export const aboutDataCard = [
    {
        id: 1,
        title: 'Expertly Crafted Bouquets',
        description:
            'At Kyiv LuxeBouquets, we offer you a new form of crafted floral arrangements. With the freshest and finest materials sourced from distinguished suppliers, our artisans carefully create bespoke bouquets for any occasion. Whether it’s an anniversary, birthday, or just a special day, our skilled florists always craft something with love and dedication.',
        image: 'src/assets/image/about-img.png',
        reverse: false,
    },
    {
        id: 2,
        title: 'Bouquets, Gifts & Ambiance',
        description:
            'Indulge in our stunning arrangements, where the collection of dried bouquets, preserved roses, and handcrafted floral decor adds a touch of sophistication to your home or celebrations. Whether it’s a table centerpiece or a bedroom flower display, our designs will elevate any space. With us, every day can be made just a little more magical.',
        image: 'src/assets/image/about-img-1.png',
        reverse: true,
    },
    {
        id: 3,
        title: 'Making Every Day Special',
        description:
            'Our mission is simple: to create very special and memorable moments for our customers. Whether it’s a bouquet for someone special, a gesture of appreciation, or simply to brighten up your day, our arrangements are designed to bring joy and happiness to you. Make your moments extraordinary with our beautiful floral designs.',
        image: 'src/assets/image/about-img-2.png',
        reverse: false,
    },
];

