import { useEffect, useState } from "react";

const Options = ({ setInfoFromOptions }) => {
  const [dishType, setDishType] = useState("");
  const [typeOfFood, setTypeOfFood] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [fastFoodType, setFastFoodType] = useState("");
  const [bonusIngredients, setBonusIngredients] = useState("");
  const [banIngredients, setBanIngredients] = useState("");

  const sendInfoOptions = () => {
    setInfoFromOptions(`dishType: ${dishType}, type of food: ${typeOfFood}, cuisina: ${cuisine}, fast food type: ${fastFoodType}, bonus ingredients: ${bonusIngredients}, ban ingredients: ${banIngredients}`)
  }

  useEffect(() => {
    sendInfoOptions()
  }, [dishType, typeOfFood, cuisine, fastFoodType, bonusIngredients, banIngredients])

  return (
    <div className="mx-auto p-4 mt-4 bg-white w-[70%] h-[450px] rounded-3xl flex flex-col items-center">
      <div className="text-3xl font-bold">Options</div>
      <p>Lorem, ipsum dolor.</p>

      <div className="flex gap-10 mt-10">
        <div>   
          <div className="flex flex-col">
            <label>Select dish you want to cook</label>
            <select
              placeholder="Dish type"
              name="dish"
              id="dish"
              onChange={(e) => setDishType(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2"
            >
              <option value="Завтрак">Завтрак</option>
              <option value="Обед">Обед</option>
              <option value="Ужин">Ужин</option>
              <option value="Перекус">перекус</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>World cuisine</label>
            <select
              name="cuisine"
              id="cuisine"
              onChange={(e) => setCuisine(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2"
            >
              <option value="Азиатская кухня">Азиатская кухня</option>
              <option value="Итальянская кухня">Итальянская кухня</option>
              <option value="Европейская кухня">Евопейская кухня</option>
              <option value="Американская кухня">Американская кухня</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Type of Food</p>
            <select
              onChange={(e) => setTypeOfFood(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2"
            >
              <option>Вегетарианская</option>
              <option>Полезная</option>
              <option>Жирная</option>
              <option>Супы</option>
            </select>
          </div>

          <div>
            <p>Fast Food</p>
            <select
              onChange={(e) => setFastFoodType(e.target.value)}
              className="w-[200px] h-[35px] rounded-3xl border-black border-2"
            >
              <option>Пицца</option>
              <option>Бургер</option>
              <option>Донер</option>
              <option>Крылышки</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Add extra ingredients</p>
            <input
              onChange={(e) => setBonusIngredients(e.target.value)}
              placeholder="extra ingredients"
              className="w-[200px] h-[35px] rounded-3xl border-2 border-black "
            />
          </div>

          <div>
            <p>Ban ingredients</p>
            <input
              onChange={(e) => setBanIngredients(e.target.value)}
              placeholder="ban ingredient"
              className="w-[200px] h-[35px] rounded-3xl border-2 border-black "
            />
          </div>
        </div>
      </div>
      <p>selected dish type: {dishType}</p>
      <p>selected cuisine: {cuisine}</p>
      <p>selected fastFoodType: {fastFoodType}</p>
      <p>selected typeOfFood: {typeOfFood}</p>
      <p>selected bonusIngredients: {bonusIngredients}</p>
      <p>selected banIngredients: {banIngredients}</p>
    </div>
  );
};

export default Options;


