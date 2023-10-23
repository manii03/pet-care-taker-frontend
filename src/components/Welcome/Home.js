import "./Home.css";
import PetOwner from "../../pictures/petOwner.jpeg";
import CareTaker from "../../pictures/careTaker.jpeg";
import HomeTopDog from "../../pictures/homeTopDog.jpg";
import { colors } from "../../utils/Colors";
import { LOCALHOST } from "../../constants/common";

function Home() {
  return (
    <div className="Home">
      <img className="homeTopDogImage" src={HomeTopDog} alt="HomeTopDog" />
      <div
        className="HomeBottomCurvedContainer"
        style={{
          backgroundColor: colors.BACKGROUND,
          color: colors.FONT_SECONDARY,
        }}
      >
        <div
          className="homeDiv"
          style={{
            backgroundColor: colors.COMPLIMENTARY_BLUE,
            color: colors.FONT_SECONDARY,
          }}
        >
          <p>
            Going out of station and worried about your pet as carrying your pet
            everywhere is not possible! Well worry no more, we will connect with
            you who is willing to babysit your pet.
          </p>
        </div>
        <div
          className="homeDiv"
          style={{
            backgroundColor: colors.COMPLIMENTARY_YELLOW,
            color: colors.FONT_SECONDARY,
          }}
        >
          <p>
            You love pets and willing to babysit one, no worries we have got you
            covered.
          </p>
        </div>
        What do you want to proceed with?
        <div className="HomeProceedContainer">
          <div
            className="HomeLearnMoreContainer"
            style={{
              backgroundColor: colors.COMPLIMENTARY_GREEN,
              color: colors.FONT_SECONDARY,
              height: "25vh",
              width: "15%",
              minWidth: "150px",
            }}
          >
            Pet Owner
            <img
              className="HomePetImage"
              src={PetOwner}
              alt="PetOwner"
              style={{
                height: "15vh",
                width: "75%",
              }}
            ></img>
            <button
              className="learnMore"
              style={{
                backgroundColor: colors.COMPLIMENTARY_YELLOW,
                color: colors.FONT_PRIMARY,
              }}
            >
              Learn More!
            </button>
          </div>
          <div
            className="HomeLearnMoreContainer"
            style={{
              backgroundColor: colors.COMPLIMENTARY_GREEN,
              color: colors.FONT_SECONDARY,
              height: "25vh",
              width: "15%",
              minWidth: "150px",
            }}
          >
            Care Taker
            <img
              className="HomePetImage"
              src={CareTaker}
              alt="CareTaker"
              style={{
                height: "15vh",
                width: "75%",
              }}
            ></img>
            <button
              className="learnMore"
              style={{
                backgroundColor: colors.COMPLIMENTARY_YELLOW,
                color: colors.FONT_PRIMARY,
              }}
            >
              Learn More!
            </button>
          </div>
        </div>
        <button
          className="button"
          onClick={() => (window.location = `${LOCALHOST}/login/`)}
          style={{
            backgroundColor: colors.COMPLIMENTARY_RED,
            color: colors.FONT_SECONDARY,
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
