import React from 'react'



const ImageURLs = () => {

    const IMG_URLs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4a01dtZRbrQoAZVkVq6-ArebBX3OBWYKkGQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQQ7N3UbV_OE7cXrDyEsfkuU7VSdFPnEqzQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUEY5aLZiHjEvgGoGEA5a7N1TQcUrJxpr6Q&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh3IzOglGBdVZPaRcc9L4dl2rPWz133jJLw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYikBSZdTXXuORyp2TPH6h19qkGmqpDZn7qw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoiCK2TeLcz6LZlw4f8nAnvgvKyGupjhMgw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7OnBno42YKCX3fWz1t8Ix7fu39DPNyZ6mA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSWikvhLMFzI9laLzR5nFuvOZUtNSF7Mvpg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_SxSmC9KL3KDjdjMrJtdCH6peA78PubItg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4a01dtZRbrQoAZVkVq6-ArebBX3OBWYKkGQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQQ7N3UbV_OE7cXrDyEsfkuU7VSdFPnEqzQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUEY5aLZiHjEvgGoGEA5a7N1TQcUrJxpr6Q&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh3IzOglGBdVZPaRcc9L4dl2rPWz133jJLw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYikBSZdTXXuORyp2TPH6h19qkGmqpDZn7qw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoiCK2TeLcz6LZlw4f8nAnvgvKyGupjhMgw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7OnBno42YKCX3fWz1t8Ix7fu39DPNyZ6mA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSWikvhLMFzI9laLzR5nFuvOZUtNSF7Mvpg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_SxSmC9KL3KDjdjMrJtdCH6peA78PubItg&s"]

    return (
        <div style={{ background: "red" }}>
            <h1>ImageURLs</h1>
            {IMG_URLs.map((item) => {
                return (
                    <img src={item} alt="img" width={200} height={250} />
                )
            })}
        </div>
    )
}

export default ImageURLs