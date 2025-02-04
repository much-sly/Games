/*
In a game, a user has a weapon with a specific amo count,
write a code that represents how the player will interact 
with the weapon, Here's everything the palyer has to be able
to do:
weapon:
- maximum amo held
- curent amo
- name the wepon
- How much damage each amo makes
- shoots a soecific number of bullets from the weapon
- reload the weapon to full capacity
- function that shows the current amo capacity of the weapon
- example(Digo([|||,--])) 3/5
- for 3/5 amo remaining and 10% damage per amo, this would
- print out(30% damage available)
*/

const weapon = {
    name: 'Pistol',
    maxCapacity: 5,
    damageRate: 10,
    ammoArray: [],

    // Method to load ammo and check for low ammo
    loadGun(availableAmmo) {
        // Clear previous ammo status
        this.ammoArray = [];

        // Fill the array with stars for available ammo
        for (let i = 0; i < availableAmmo; i++) {
            this.ammoArray.push('*');
        }

        // Fill the rest of the array with dashes for empty slots
        for (let i = availableAmmo; i < this.maxCapacity; i++) {
            this.ammoArray.push('-');
        }

        // Calculate total damage
        const totalDamage = availableAmmo * this.damageRate;

        // Display the gun status
        console.log(`Gun: ${this.name}`);
        console.log(`Ammo: ${this.ammoArray.join(' ')}`);
        console.log(`Total Damage: ${totalDamage}`);

        // Check for low ammo and prompt reload
        if (availableAmmo === 1) {
            console.warn(`Warning: Only 1 ammo left! Reloading to full capacity...`);
            this.reloadGun();
        }
    },

    // Method to reload the gun to full capacity
    reloadGun() {
        // Refill ammo to max capacity
        this.ammoArray = Array(this.maxCapacity).fill('*');
        console.log(`Gun reloaded! Ammo: ${this.ammoArray.join(' ')}`);
    },

    // Method to update gun properties
    updateGun(name, maxCapacity, damageRate) {
        if (name) this.name = name;
        if (maxCapacity) this.maxCapacity = maxCapacity;
        if (damageRate) this.damageRate = damageRate;
    }
};

// Example usage:
// Load the gun with 1 ammo
weapon.loadGun(1);

// Reloaded automatically, now load with full ammo
weapon.loadGun(5);

weapon.updateGun('Machine gun', 15, 10)
weapon.loadGun(6);
