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
//           <h2 className={classes.title}>Let{"'"}s talk products</h2>
//           <h5 className={classes.description}>
//             Shkruaj diqka rreth produkteve
//           </h5>
//         </GridItem>
//       </GridContainer>
//       <div>
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Eggs"
//               description="Shkruaj per vezet"
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
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/components/navPillsStyle.js";

const useStyles = makeStyles(styles);

export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
  };
  const handleChangeIndex = (index) => {
    setActive(index);
  };
  const classes = useStyles();
  const { tabs, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      {tabs.map((prop, key) => {
        if (key !== active) {
          return null;
        } else {
          return (
            <div className={classes.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        }
      })}
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};

