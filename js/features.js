fetch("../data/features.json")
  .then((response) => response.json())
  .then((data) => {
    createAllList(data);
    createSocailList(data);
    createEnterpriseList(data);
    createConsultantList(data);
    createEcommerceList(data);
  })
  .catch((error) => {
    // display error
    console.error("Error:", error);
  });

function createAllList(data) {
  for (let i = 0; i < data.features.length; i++) {
    // create elements
    const mainContainer = document.createElement("div");
    const featureItem = document.createElement("div");
    const featureImage = document.createElement("div");
    const featureName = document.createElement("span");
    const featureTitle = document.createElement("h3");
    const featureDesc = document.createElement("p");
    const img = document.createElement("img");

    //  assign values to the elements
    featureName.innerHTML = data.features[i].feature;
    featureTitle.innerHTML = data.features[i].title;
    featureDesc.innerHTML = data.features[i].description;
    img.src = data.features[i].img;
    img.alt = data.features[i].feature;

    //  if feature is not available create and append "coming soon"
    if (data.features[i].available === false) {
      const featureAvailable = document.createElement("span");
      featureAvailable.className = "coming_soon";
      featureAvailable.innerHTML = "coming soon";
      featureItem.appendChild(featureAvailable);
    }

    //  append other elements
    featureItem.appendChild(featureName);
    featureItem.appendChild(featureTitle);
    featureItem.appendChild(featureDesc);
    featureImage.appendChild(img);

    if (i % 2 === 0) {
      mainContainer.className = "feature_left";
      featureItem.className = "feature_item gs_reveal gs_reveal_fromLeft";
      featureImage.className = "feature_image gs_reveal gs_reveal_fromRight";

      mainContainer.appendChild(featureItem);
      mainContainer.appendChild(featureImage);
    } else {
      mainContainer.className = "feature_right";
      featureItem.className = "feature_item gs_reveal gs_reveal_fromRight";
      featureImage.className = "feature_image gs_reveal gs_reveal_fromLeft";
      mainContainer.appendChild(featureImage);
      mainContainer.appendChild(featureItem);
    }

    // append mainContainer to body
    document.querySelector(".pills_all_tab").appendChild(mainContainer);
  }
}
function createSocailList(data) {
  for (let i = 0; i < data.features.length; i++) {
    // create elements
    const mainContainer = document.createElement("div");
    const featureItem = document.createElement("div");
    const featureImage = document.createElement("div");
    const featureName = document.createElement("span");
    const featureTitle = document.createElement("h3");
    const featureDesc = document.createElement("p");
    const img = document.createElement("img");

    //  assign values to the elements
    featureName.innerHTML = data.features[i].feature;
    featureTitle.innerHTML = data.features[i].title;
    featureDesc.innerHTML = data.features[i].description;
    img.src = data.features[i].img;
    img.alt = data.features[i].feature;

    //  if feature is not available create and append "coming soon"
    if (data.features[i].available === false) {
      const featureAvailable = document.createElement("span");
      featureAvailable.className = "coming_soon";
      featureAvailable.innerHTML = "coming soon";
      featureItem.appendChild(featureAvailable);
    }

    if (
      data.features[i].feature === "Payment" ||
      data.features[i].feature === "Bookkeeping" ||
      data.features[i].feature === "Storefront" ||
      data.features[i].feature === "Paylink" ||
      data.features[i].feature === "CRM" ||
      data.features[i].feature === "Micro Loans"
    ) {
      //  append other elements
      featureItem.appendChild(featureName);
      featureItem.appendChild(featureTitle);
      featureItem.appendChild(featureDesc);
      featureImage.appendChild(img);

      if (i % 2 === 0) {
        mainContainer.className = "feature_left";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromLeft";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromRight";

        mainContainer.appendChild(featureItem);
        mainContainer.appendChild(featureImage);
      } else {
        mainContainer.className = "feature_right";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromRight";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromLeft";
        mainContainer.appendChild(featureImage);
        mainContainer.appendChild(featureItem);
      }
    }

    // append mainContainer to body
    document.querySelector(".pills_socail_tab").appendChild(mainContainer);
  }
}
function createEnterpriseList(data) {
  for (let i = 0; i < data.features.length; i++) {
    // create elements
    const mainContainer = document.createElement("div");
    const featureItem = document.createElement("div");
    const featureImage = document.createElement("div");
    const featureName = document.createElement("span");
    const featureTitle = document.createElement("h3");
    const featureDesc = document.createElement("p");
    const img = document.createElement("img");

    //  assign values to the elements
    featureName.innerHTML = data.features[i].feature;
    featureTitle.innerHTML = data.features[i].title;
    featureDesc.innerHTML = data.features[i].description;
    img.src = data.features[i].img;
    img.alt = data.features[i].feature;

    //  if feature is not available create and append "coming soon"
    if (data.features[i].available === false) {
      const featureAvailable = document.createElement("span");
      featureAvailable.className = "coming_soon";
      featureAvailable.innerHTML = "coming soon";
      featureItem.appendChild(featureAvailable);
    }

    if (
      data.features[i].feature === "Payment" ||
      data.features[i].feature === "Bookkeeping" ||
      data.features[i].feature === "CRM" ||
      data.features[i].feature === "Micro Loans"
    ) {
      //  append other elements
      featureItem.appendChild(featureName);
      featureItem.appendChild(featureTitle);
      featureItem.appendChild(featureDesc);
      featureImage.appendChild(img);

      if (i % 2 === 0) {
        mainContainer.className = "feature_left";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromLeft";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromRight";

        mainContainer.appendChild(featureItem);
        mainContainer.appendChild(featureImage);
      } else {
        mainContainer.className = "feature_right";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromRight";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromLeft";
        mainContainer.appendChild(featureImage);
        mainContainer.appendChild(featureItem);
      }
    }

    // append mainContainer to body
    document.querySelector(".pills_enterprise_tab").appendChild(mainContainer);
  }
}
function createConsultantList(data) {
  for (let i = 0; i < data.features.length; i++) {
    // create elements
    const mainContainer = document.createElement("div");
    const featureItem = document.createElement("div");
    const featureImage = document.createElement("div");
    const featureName = document.createElement("span");
    const featureTitle = document.createElement("h3");
    const featureDesc = document.createElement("p");
    const img = document.createElement("img");

    //  assign values to the elements
    featureName.innerHTML = data.features[i].feature;
    featureTitle.innerHTML = data.features[i].title;
    featureDesc.innerHTML = data.features[i].description;
    img.src = data.features[i].img;
    img.alt = data.features[i].feature;

    //  if feature is not available create and append "coming soon"
    if (data.features[i].available === false) {
      const featureAvailable = document.createElement("span");
      featureAvailable.className = "coming_soon";
      featureAvailable.innerHTML = "coming soon";
      featureItem.appendChild(featureAvailable);
    }

    if (
      data.features[i].feature === "Payment" ||
      data.features[i].feature === "Paylink"
    ) {
      //  append other elements
      featureItem.appendChild(featureName);
      featureItem.appendChild(featureTitle);
      featureItem.appendChild(featureDesc);
      featureImage.appendChild(img);

      if (i % 2 === 0) {
        mainContainer.className = "feature_left";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromLeft";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromRight";

        mainContainer.appendChild(featureItem);
        mainContainer.appendChild(featureImage);
      } else {
        mainContainer.className = "feature_right";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromRight";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromLeft";
        mainContainer.appendChild(featureImage);
        mainContainer.appendChild(featureItem);
      }
    }

    // append mainContainer to body
    document.querySelector(".pills_consultant_tab").appendChild(mainContainer);
  }
}
function createEcommerceList(data) {
  for (let i = 0; i < data.features.length; i++) {
    // create elements
    const mainContainer = document.createElement("div");
    const featureItem = document.createElement("div");
    const featureImage = document.createElement("div");
    const featureName = document.createElement("span");
    const featureTitle = document.createElement("h3");
    const featureDesc = document.createElement("p");
    const img = document.createElement("img");

    //  assign values to the elements
    featureName.innerHTML = data.features[i].feature;
    featureTitle.innerHTML = data.features[i].title;
    featureDesc.innerHTML = data.features[i].description;
    img.src = data.features[i].img;
    img.alt = data.features[i].feature;

    //  if feature is not available create and append "coming soon"
    if (data.features[i].available === false) {
      const featureAvailable = document.createElement("span");
      featureAvailable.className = "coming_soon";
      featureAvailable.innerHTML = "coming soon";
      featureItem.appendChild(featureAvailable);
    }

    if (data.features[i].feature === "Storefront") {
      //  append other elements
      featureItem.appendChild(featureName);
      featureItem.appendChild(featureTitle);
      featureItem.appendChild(featureDesc);
      featureImage.appendChild(img);

      if (i % 2 === 0) {
        mainContainer.className = "feature_left";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromLeft";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromRight";

        mainContainer.appendChild(featureItem);
        mainContainer.appendChild(featureImage);
      } else {
        mainContainer.className = "feature_right";
        featureItem.className = "feature_item gs_reveal gs_reveal_fromRight";
        featureImage.className = "feature_image gs_reveal gs_reveal_fromLeft";
        mainContainer.appendChild(featureImage);
        mainContainer.appendChild(featureItem);
      }
    }

    // append mainContainer to body
    document.querySelector(".pills_ecommerce_tab").appendChild(mainContainer);
  }
}
