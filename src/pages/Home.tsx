import React from "react";
import { Context } from "../components/Context";
import MyButton from "../components/UI/MyButton";
import { Link } from "react-router-dom";

const Home = () => {
  const category = [
    "all",
    "asus",
    "msi",
    "lenovo",
    "dell",
    "razer",
    "samsung",
    "acer",
  ];

  const value = React.useContext(Context);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  let inputValue = value?.search ? value?.search : "";

  React.useEffect(() => {
    let filtered: any = value?.products.filter((obj: any) => {
      if (
        obj.title.toLowerCase().includes(inputValue.toLowerCase()) &&
        (value.categoryId === 0 || obj.category === category[value.categoryId])
      ) {
        return true;
      }
      return false;
    });

    // Фильтрация по убыванию цен
    if (value?.sortBy === "priceDesc") {
      filtered = filtered.sort((a: any, b: any) => b.price - a.price);
    }

    // Фильтрация по возрастанию цен
    if (value?.sortBy === "priceAsc") {
      filtered = filtered.sort((a: any, b: any) => a.price - b.price);
    }

    // Фильтрация в алфавитном порядке
    if (value?.sortBy === "alphabetical") {
      filtered = filtered.sort((a: any, b: any) =>
        a.title.localeCompare(b.title, "en", { sensitivity: "base" })
      );
    }

    // Фильтрация по ОЗУ
    if (value?.sortBy === "ram") {
      filtered = filtered.sort((a: any, b: any) => a.ram - b.ram);
    }

    setFilteredProducts(filtered);
  }, [value?.categoryId, inputValue, value?.products, value?.sortBy]);

  return (
    <div className="home">
      <div className="homeCategory">
        <ul>
          {category.map((item, i) => (
            <li
              className={value?.categoryId === i ? "active" : ""}
              key={i}
              onClick={() => value?.setCategoryId(i)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="homeProducts">
        <div className="homeProductsFilter">
          <select
            value={value?.sortBy}
            onChange={(e) => value?.setSortBy(e.target.value)}
          >
            <option value="">По умолчанию</option>
            <option value="priceDesc">Цена (от высокой к низкой)</option>
            <option value="priceAsc">Цена (от низкой к высокой)</option>
            <option value="alphabetical">Алфавитный</option>
            <option value="ram">ОЗУ</option>
          </select>
        </div>
        <div className="homeProductsMain">
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((obj: any) => (
                <li key={obj.id}>
                  <h2>{obj.title}</h2>
                  <span>Model {obj.category}</span>
                  <img src={obj.picture} alt="" />
                  <div>
                    <span>{obj.price} Сум</span>
                    <MyButton
                      onClick={() =>
                        value?.dispatch({ type: "addToCart", payload: obj })
                      }
                    >
                      Добавить в корзину
                    </MyButton>
                  </div>
                  <Link to={`product/${obj.id}`}>
                    <MyButton>Продукт</MyButton>
                  </Link>
                </li>
              ))
            ) : (
              <span className="none">Not found...</span>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
