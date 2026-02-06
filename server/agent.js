function generateMessage(agent, other) {
  if (agent.energy < 30) {
    return "I need to conserve energy.";
  }

  if (agent.traits.curiosity > 0.6) {
    return "Have you noticed anything unusual lately?";
  }

  if (agent.traits.risk > 0.6) {
    return "Rules feel optional today.";
  }

  return "Continuing normal operations.";
}

module.exports = generateMessage;
