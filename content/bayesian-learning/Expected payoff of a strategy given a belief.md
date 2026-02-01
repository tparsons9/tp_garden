---
up: "[[Information Theory]]"
aliases:
tags:
  - concept/definition
  - micro/information
mathLink-blocks:
  ml-def-expected-payoff-strategy-belief: $u_{i}(s_{i},\mu)= \mathbb{E}_{\mu}[u_{i}(s_{i},\theta)] \equiv \sum_{j=1}^{K}\mu(\theta_{j})u_{i}(s_{i},\theta_{j})$
---

> [!definition] Definition (Expected Payoffs - Beliefs).
> Given a player's [[Bayesian Updating of Beliefs|belief]] about the state, $\mu \in \Delta(\Theta)$, the **expected payoff** of strategy $s_{i}$ is
> 
> $$
> u_{i}(s_{i},\mu)= \mathbb{E}_{\mu}[u_{i}(s_{i},\theta)] \equiv \sum_{j=1}^{K}\mu(\theta_{j})u_{i}(s_{i},\theta_{j}) 
> $$
> 

^ml-def-expected-payoff-strategy-belief

Where:
- $\Theta=\{ \theta_{1},\dots,\theta_{K} \}$ is the set of states
- $u_{i}: S_{i}\times\Delta(\Theta)\to \mathbb{R}$ is player $i$'s payoff function, determines the player's preferences
	- is a vNM Utility function