import React, { useState } from "react";

const MusicPlayer = () => {
    const [url, setUrl] = useState('');

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const handlePlayButtonClick = () => {
        // Встановлюємо URL для iframe
        const urlPattern = /(?:list=)([a-zA-Z0-9_-]+)/;
        const match = url.match(urlPattern);

        if (match) {
            // Отримуємо ID плейлиста
            const playlistID = match[1];
            setUrl(`https://www.youtube.com/embed?listType=playlist&list=${playlistID}&rel=0&showinfo=0`);
        } else {
            alert('Будь ласка, введіть дійсний URL плейлиста YouTube.');
        }
    };

    return (
        <div>
            <h1>YouTube Music Player</h1>
            <input 
                type="text" 
                value={url} 
                onChange={handleInputChange} 
                placeholder="Введіть URL плейлиста YouTube..." 
            />
            <button onClick={handlePlayButtonClick}>Відтворити</button>
            <div>
                {url && (
                    <iframe 
                        width="560" 
                        height="315" 
                        src={url} 
                        allow="autoplay; encrypted-media" 
                        title="YouTube Player"
                    />
                )}
            </div>
        </div>
    );
};

export default MusicPlayer;