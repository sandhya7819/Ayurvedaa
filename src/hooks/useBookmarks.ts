'use client';

import { useState, useEffect } from 'react';

export function useBookmarks() {
    const [bookmarks, setBookmarks] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('ayurveda_bookmarks');
        if (saved) {
            try {
                setBookmarks(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse bookmarks', e);
            }
        }
        setIsLoaded(true);
    }, []);

    const toggleBookmark = (id: string) => {
        const newBookmarks = bookmarks.includes(id)
            ? bookmarks.filter(b => b !== id)
            : [...bookmarks, id];

        setBookmarks(newBookmarks);
        localStorage.setItem('ayurveda_bookmarks', JSON.stringify(newBookmarks));
    };

    const isBookmarked = (id: string) => bookmarks.includes(id);

    return { bookmarks, toggleBookmark, isBookmarked, isLoaded };
}
