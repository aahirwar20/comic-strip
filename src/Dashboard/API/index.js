const URL = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud"
const Token = "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM"

const getImage = async (textInput) => {
    try {
        const response = await fetch(
            URL,
            {
                headers: { 
                    "Accept": "image/png",
                    "Authorization": Token, 
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify({"inputs" : textInput}),
            }
        );
  
        if (!response.ok) {
          throw new Error('Failed to generate comic');
        }
        const result = await response.blob()
        return result

    } catch (error) {
        console.error(error);
        alert('Failed to generate comic. Please try again.');
    }
}

export default getImage
