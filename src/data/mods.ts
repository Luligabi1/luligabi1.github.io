export interface Mod {
  title: string;
  img: string;
  desc: string;
  badges: string[];
  github?: string;
  curseforge?: string;
  modrinth?: string;
}

export const mods = {
  hostileNeuralIndustrialization: {
    title: "Hostile Neural Industrialization",
    img: "/mod_icons/hostile_neural_industrialization.webp",
    desc: "Hostile Neural Networks meets Modern Industrialization — Upgrade your Neural Network with integrated machines and multiblocks!",
    badges: ["Neoforge", "Modern", "Kotlin"],
    github: "https://github.com/Luligabi1/HostileNeuralIndustrialization/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/hostile-neural-industrialization",
    modrinth: "https://modrinth.com/mod/hostile-neural-industrialization",
  },
  enhancedWorkbenches: {
    title: "Enhanced Workbenches",
    img: "/mod_icons/enhanced_workbenches.webp",
    desc: "Bring the classic Red Power 2 Project Table into Modern Minecraft!",
    badges: ["Neoforge", "Fabric", "Modern", "Java"],
    github: "https://github.com/Luligabi1/EnhancedWorkbenches/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/enhanced-workbenches",
    modrinth: "https://modrinth.com/mod/enhanced-workbenches",
  },
  amimi: {
    title: "AMIMI (Advanced Multiblock Info for Modern Industrialization)",
    img: "/mod_icons/amimi.webp",
    desc: "Improves on Modern Industrialization's Multiblock Information tab by adding a 3D preview of the multiblock directly onto your recipe viewer of choice",
    badges: ["Neoforge", "Modern", "Java"],
    github: "https://github.com/Luligabi1/AMIMI/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/amimi",
    modrinth: "https://modrinth.com/mod/amimi",
  },
  fuelInfo: {
    title: "FuelInfo",
    img: "/mod_icons/fuelinfo.webp",
    desc: "Client-side QoL mod that informs you how many items you can smelt/brew and how long it will take in Furnaces and Brewing Stands",
    badges: ["Neoforge", "Fabric", "Modern", "Java"],
    github: "https://github.com/Luligabi1/FuelInfo/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/fuel-info",
    modrinth: "https://modrinth.com/mod/fuel-info",
  },
  incantationem: {
    title: "Incantationem",
    img: "/mod_icons/incantationem.webp",
    desc: "Vanilla+ mod adding new enchantments and curses into the game!",
    badges: ["Neoforge", "Fabric", "Modern", "Java"],
    github: "https://github.com/Luligabi1/Incantationem/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/incantationem",
    modrinth: "https://modrinth.com/mod/incantationem",
  },
  yetAnotherIndustrialization: {
    title: "Yet Another Industrialization!",
    img: "/mod_icons/yet_another_industrialization.webp",
    desc: "An addon for Modern Industrialization that adds miscellaneous machines, items and more!",
    badges: ["Neoforge", "Modern", "Kotlin"],
    github: "https://github.com/Luligabi1/YetAnotherIndustrialization/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/yet-another-industrialization",
    modrinth: "https://modrinth.com/mod/yet-another-industrialization",
  },
  coxinhaUtilities: {
    title: "Coxinha Utilities",
    img: "/mod_icons/coxinha_utilities.webp",
    desc: "A standalone utility mod adding random and ~~mostly~~ always unoriginal things.",
    badges: ["Neoforge", "Fabric", "Modern", "Java"],
    github: "https://github.com/Luligabi1/CoxinhaUtilities/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/coxinha-utilities",
    modrinth: "https://modrinth.com/mod/coxinha-utilities",
  },
  deepMobLearningRefabricated: {
    title: "Deep Mob Learning: Refabricated",
    img: "/mod_icons/deep_mob_learning_refabricated.webp",
    desc: "A rework of the original [Deep Mob Learning](https://www.curseforge.com/minecraft/mc-mods/deep-mob-learning) mod for modern versions of Minecraft. Provides an alternative way of acquiring mob loot through intense duels with the Matrix Glitches.",
    badges: ["Fabric", "Modern", "Kotlin"],
    github: "https://github.com/CafeteriaGuild/DeepMobLearning-Refabricated/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/deep-mob-learning-refabricated",
    modrinth: "https://modrinth.com/mod/deep-mob-learning-refabricated",
  },
  logicates: {
    title: "Logicates",
    img: "/mod_icons/logicates.webp",
    desc: "Logicates are special redstone components of diverse nature, including Logic Gates, sensors and other useful gadgets for your redstone circuits.",
    badges: ["Fabric", "Modern", "Java"],
    github: "https://github.com/Luligabi1/Logicates/",
    curseforge: "https://www.curseforge.com/minecraft/mc-mods/logicates",
    modrinth: "https://modrinth.com/mod/logicates",
  },
  barelyBaskets: {
    title: "Barely Baskets",
    img: "/mod_icons/barely_baskets.webp",
    desc: "Adds Baskets into the game. Baskets can act as early game portable storage and hoppers, catching anything thrown on top of them!",
    badges: ["Java"],
    github: "https://github.com/Luligabi1/Barely-Baskets",
    curseforge: "https://www.curseforge.com/hytale/mods/barely-baskets",
  },
} satisfies Record<string, Mod>;

export type ModId = keyof typeof mods;
