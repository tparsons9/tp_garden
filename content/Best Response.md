---
up: "[[Game Theory]]"
aliases:
  - BR
tags:
  - concept/definition
  - micro/decision
---
> [!definition] Definition (Best Response).
> A [[Strategy Profile|strategy]] $s_{i}\in S_{i}$ is a (weak) **best-response** $(BR)$ to the belief $\mu$ if 
> $$
> u_{i}(s_{i},\  \mu)\geq u_{i}(s_{i}^{\prime},\mu),\qquad \forall s_{i}^{\prime} \in S_{i}
> $$

where $u_{i}$ is the [[Expected payoff of a strategy given a belief]]. 

The **best-response correspondence** $BR_{i}(\mu)$ maps each belief $\mu$ to the set of the player's best responses: 
$$
BR_{i}(\mu) = \argmax_{s_{i}\in S_{i}}\, u_{i}(s_{i},\mu)
$$
