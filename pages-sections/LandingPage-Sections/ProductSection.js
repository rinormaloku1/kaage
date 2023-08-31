// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// // core components
// import GridContainer from "/components/Grid/GridContainer.js";
// import GridItem from "/components/Grid/GridItem.js";
// import InfoArea from "/components/InfoArea/InfoArea.js";

// import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

// const useStyles = makeStyles(styles);

// export default function ProductSection() {
//   const classes = useStyles();
//   return (
//     <div className={classes.section}>
//       <GridContainer justify="center">
//         <GridItem xs={12} sm={12} md={8}>
//           <h2 className={classes.title}>Let{"'"}s talk product</h2>
//           <h5 className={classes.description}>
//             This is the paragraph where you can write more details about your
//             product. Keep you user engaged by providing meaningful information.
//             Remember that by this time, the user is curious, otherwise he wouldn
//             {"'"}t scroll to get here. Add a button if you want the user to see
//             more.
//           </h5>
//         </GridItem>
//       </GridContainer>
//       <div>
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Free Chat"
//               description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
//               icon={Chat}
//               iconColor="info"
//               vertical
//             />
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Verified Users"
//               description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
//               icon={VerifiedUser}
//               iconColor="success"
//               vertical
//             />
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Fingerprint"
//               description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
//               icon={Fingerprint}
//               iconColor="danger"
//               vertical
//             />
//           </GridItem>
//         </GridContainer>
//       </div>
//     </div>
//   );
// }


import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Navigation Pills</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>With Icons</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Eggs",
                    tabContent: (
                      <span>
                        <p style={color="#000"}>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Trees",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
