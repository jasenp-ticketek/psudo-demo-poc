let HomePageLayout;

if (THEME_TEMPLATE === "AustrliaOpen") {
  HomePageLayout = require("./components/pages/homepage/Layouts/AustraliaOpen");
} else {
  HomePageLayout = require("./components/pages/homepage/Layouts/Ultimate");
}

export const HomePage = connect(
  mapStateToProps,
  mapDispathToProps
)(HomePageLayout);
