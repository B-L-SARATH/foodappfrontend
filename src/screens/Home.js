import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";
function Home() {
  const cartstate = useSelector((state) => state.cart);

  const [search, setsearch] = useState("");
  const [foodcat, setfoodcat] = useState([]);
  const [fooditems, setfooditems] = useState([]);
  const loaditems = async () => {
    try {
      const response = await axios.get(
        "https://foodapp-api.vercel.app/api/fooditems"
      );
      console.log("data retrieved successfully");
      const result = response.data;
      setfoodcat(result[1]);
      setfooditems(result[0]);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log(cartstate);
  }, [cartstate]);
  useEffect(() => {
    loaditems();
  }, []);
  return (
    <div>
      <Navbar />

      {/* Couresel */}

      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://source.unsplash.com/1500x500/?burger"
              class="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search item"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://source.unsplash.com/1500x500/?pizza"
              class="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://source.unsplash.com/1500x500/?pastry"
              class="d-block w-100"
              alt="..."
              style={{ filter: "brightness(40%)" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* fooditems */}

      <div style={{ overflow: "hidden" }}>
        {foodcat !== null
          ? foodcat.map((data) => {
              return (
                <div className="row mb-5 p-3">
                  <div key={data.id} className="text-white mr-5">
                    {" "}
                    {data.CategoryName}
                  </div>
                  <hr />
                  {fooditems !== []
                    ? fooditems
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="col-12  col-sm-6 col-md-3"
                            >
                              <Card
                                name={item.name}
                                img={item.img}
                                options={item.options[0]}
                              />
                            </div>
                          );
                        })
                    : ""}
                </div>
              );
            })
          : ""}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
