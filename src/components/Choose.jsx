import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {
  const apikey = import.meta.env.VITE_API_KEY;
  const apiurl = import.meta.env.VITE_API_URL;
  const [infoFromOptions, setInfoFromOptions] = useState("");

  const [gptPromptText, setGptPromptText] = useState([]);

  const [imgUrl, setImgUrl] = useState("");

  const [generatedText, setGeneratedText] = useState("");

  const ingredientsData = [
    { name: "Meat", imageSrc: "/images/meat.png" },
    { name: "Apple", imageSrc: "/images/apple.png" },
    { name: "Banana", imageSrc: "/images/banana.png" },
    { name: "Carrot", imageSrc: "/images/carrot.png" },
  ];

  const handleIngredientClick = (ingredient) => {
    setGptPromptText([...gptPromptText, ingredient.name]);
  };

  const createText = () => {
    let text =
      "Generate breakfast using these ingredients: " +
      gptPromptText.toString() +
      "other settings" +
      infoFromOptions;
    console.log(text);

    return text;
  };

  const generateText = async () => {
    let text = "generate me schedule for training for a week";
    console.log("started generate of text...");

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: text,
          max_tokens: 350,
        }),
      });

      const data = await response.json();  
      setGeneratedText(data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };
  const generateImage = async (promptText) => {
    console.log("Starting...");
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: promptText,
        n: 1,
        size: "512x512",
      }),
    };
    console.log(promptText);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json();
      console.log(data);
      setImgUrl(data.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap pt-[120px]">
        {ingredientsData.map((ingredient, index) => (
          <Ingredient
            key={index}
            imageSrc={ingredient.imageSrc}
            onClick={() => handleIngredientClick(ingredient)}
          />
        ))}
        <div>
          <h3>Selected Ingredients:</h3>
          <ul>
            {gptPromptText.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => generateText()}
          className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
        >
          Generate Dish
        </button>
      </div>
      <img src={imgUrl} alt="img" width={400} height={400} />
      <p>
        {generatedText}
      </p>
      <Options setInfoFromOptions={setInfoFromOptions} />
      <p className="text-green-400 text-2xl font-bold ">
        Info From options{infoFromOptions}
      </p>
    </div>
  );
};

export default Choose;
