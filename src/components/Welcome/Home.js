import "./Home.css";
import PetOwner from "../../pictures/petOwner.jpeg";
import CareTaker from "../../pictures/careTaker.jpeg";
import HomeTopDog from "../../pictures/homeTopDog.jpg";
import { colors } from "../../utils/Colors";

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
            }}
          >
            Pet Owner
            <img
              className="HomePetImage"
              src={PetOwner}
              alt="PetOwner"
              height={120}
              width={120}
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
            }}
          >
            Care Taker
            <img
              className="HomePetImage"
              src={CareTaker}
              alt="CareTaker"
              height={120}
              width={120}
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
          onClick={() => (window.location = "http://localhost:3000/login/")}
          style={{
            backgroundColor: colors.COMPLIMENTARY_RED,
            color: colors.FONT_SECONDARY,
          }}
          className="getStarted"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
