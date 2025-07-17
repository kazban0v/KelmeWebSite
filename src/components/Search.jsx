import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchState, setCloseSearch } from "../app/SearchSlice.js";
import {
    MagnifyingGlassIcon,
    XMarkIcon,
    ShoppingBagIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { setAddItemToCart } from "../app/CartSlice.js";
import { setAddItemToLike, setRemoveItemFromLike } from "../app/LikeSlice.js";

const Search = ({ items }) => {
    const dispatch = useDispatch();
    const ifSearchState = useSelector(selectSearchState);
    const likedItems = useSelector((state) => state.like.likeItems);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const onSearchToggle = () => {
        dispatch(
            setCloseSearch({
                searchState: false,
            })
        );
    };

    useEffect(() => {
        if (searchTerm) {
            const filtered = items.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    }, [searchTerm, items]);

    const onAddToCart = (item) => {
        dispatch(setAddItemToCart(item));
    };

    const onAddToLike = (item) => {
        if (likedItems.some((likeItem) => likeItem.id === item.id)) {
            dispatch(setRemoveItemFromLike(item));
        } else {
            dispatch(setAddItemToLike(item));
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-black/50 z-[250] ${ifSearchState
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
        >
            <div
                className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-white p-5 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3`}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Поиск</h2>
                    <button type="button" onClick={onSearchToggle}>
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="relative mt-5">
                    <input
                        type="text"
                        placeholder="Поиск товаров..."
                        className="w-full p-2 border border-gray-300 rounded-lg pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <div className="mt-5 max-h-[60vh] overflow-y-auto">
                    {filteredItems.map((item, i) => (
                        <div key={i} className="flex items-center justify-between gap-3 my-2 p-2 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
                                <div>
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.text}</p>
                                    <p className="font-bold">₸{item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
                                    onClick={() => onAddToCart(item)}
                                >
                                    <ShoppingBagIcon className="icon-style text-slate-900" />
                                </button>
                                <button
                                    type="button"
                                    className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
                                    onClick={() => onAddToLike(item)}
                                >
                                    {likedItems.some((likeItem) => likeItem.id === item.id) ? (
                                        <HeartIconSolid className="icon-style text-red-500 transition-all duration-300" />
                                    ) : (
                                        <HeartIcon className="icon-style text-slate-900 transition-all duration-300" />
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;