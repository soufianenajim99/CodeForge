import {JSX} from "react";

type CategoryCardProps = {
    title: string;
    description: string;
};
export default function CategoryCard({ title, description }: CategoryCardProps): JSX.Element {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}