
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// bg_winter_trees_2_2x
		const bg_winter_trees_2_2x = this.add.image(647, 310, "bg_winter_trees_2@2x");
		bg_winter_trees_2_2x.scaleX = 0.6430356637932694;
		bg_winter_trees_2_2x.scaleY = 0.6430356637932694;

		// fufuSuperDino
		this.add.image(640, 257, "FufuSuperDino");

		// text
		const text = this.add.text(640, 458, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Phaser Editor v4\nVite + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// block_ground_00_single
		this.add.image(36, 652, "block_ground_00_single");

		// penguin_walk01_2x
		this.add.image(49, 546, "penguin_walk01@2x");

		// penguin_walk01
		this.add.image(137, 575, "penguin_walk01");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
