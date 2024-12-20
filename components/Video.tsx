export default function Video() {
    return (
        <div className="w-full h-full">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9V4V9YhY5i8?controls=0&autoplay=1&loop=1&playlist=9V4V9YhY5i8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};
