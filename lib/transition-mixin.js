import globalConfig from "@/global.json";

export default {
  transition(to, from) {
    const menuValues = Object.values(globalConfig.menus);
    let comparePathIndex = () => {
      return menuValues.indexOf(from.path) - menuValues.indexOf(to.path);
    };

    if (!from || comparePathIndex() === 0) {
      return "page";
    } else if (comparePathIndex() < 0) {
      return "slide-left";
    } else {
      return "slide-right";
    }
  }
};
