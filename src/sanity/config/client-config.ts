import { ClientPerspective } from "next-sanity";

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: "production",
    apiVersion: "2023-03-09", // Update to the latest API version if needed
    useCdn: false, // Set to false if you want fresh data
    token: process.env.SANITY_API_KEY as string, // Token for authentication
    perspective: 'published' as ClientPerspective, // To fetch only published content
};

export default config;
