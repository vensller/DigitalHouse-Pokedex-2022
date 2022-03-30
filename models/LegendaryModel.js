function LegendaryModel(id, name, description, type, healthPoints, specialAttack, defense, attack, experience, especialDefense) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.type = type;
  this.healthPoints = healthPoints;
  this.specialAttack = specialAttack
  this.defense = defense;
  this.attack = attack;
  this.experience = experience;
  this.especialDefense = especialDefense;
}

module.exports = LegendaryModel;