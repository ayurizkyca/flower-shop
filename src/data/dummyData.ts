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
  
  