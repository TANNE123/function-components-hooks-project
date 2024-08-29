import { Component } from "react";
import axios from "axios";
import "./App.css";
import "./css.modules.css";
import Card from "./card";

class LogoComponent extends Component {
  state = {
    result: [],
    result1: [],
  };
  componentDidMount() {
    this.FetchData();
  }

  FetchData = async () => {
    const { status, data } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    if (status === 200) {
      this.setState(
        {
          result: data,
        },
        () => {
          // 
        }
      );
    }
  };

  ClickHandel = (id) => {
    this.setState(
      {
        result1: id,
      },
      () => {
        
      }
    );
  };
  render() {
    const { result } = this.state;
    const { result1 } = this.state;
    return (
      <>
        <div className="left">
          {result.map((eachItem) => {
            const { id } = eachItem;
            return (
              <>
                <div
                  className="card1"
                  onClick={() => this.ClickHandel(eachItem)}
                >
                  <Card
                    title={eachItem.title}
                    img={eachItem.image}
                    text={eachItem.category}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="right">
          <Card
            title={result1.title}
            img={result1.image}
            text={result1.category}
          />
        </div>
      </>
    );
  }
}

export default LogoComponent;
