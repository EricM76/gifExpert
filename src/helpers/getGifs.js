export const getGifs = async (category) => {
 
    try {
        const apiKey = "4DCyAC0tB0jCBtNAlwDiMjL9H6NtS8XT";

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`

        const response = await fetch(url);  
        
        const {data} = await response.json();

        const gifs = data.map(img => (
            {
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url
            }
        ))

        return gifs


        
    } catch (error) {
        console.log(error);
        return []
    }

}