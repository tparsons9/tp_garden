---
up: "[[Bayesian Persuasion]]"
aliases:
tags:
  - concept/definition
  - micro/equilibrium
mathLink-blocks:
  ml-def-receivers-optimal-action: $\hat{a}(\mu)\in \argmax_{a\in A(\mu)}\, \mathbb{E}_{\mu}[u_{S}(a,\theta)]$
---
> [!definition] Definition (Receiver's Best Response).
> $$
> A(\mu)= \argmax_{a\in A}\, \mathbb{E}_{\mu}[u_{R}(a,\theta)]
> $$
> is the set of actions that maximizes the Receiver's expected payoff given belief $\mu$. 

The fundamental role of the Receiver is to choose an action that maximizes their [[Expected payoff of a strategy given a belief|expected payoff]] given their updated belief $\mu$. The set of such optimal actions is precisely $A(\mu)$. 

The overall solution concept of [[Bayesian Persuasion]] is the **Sender-Preferred** [[Subgame Perfect Nash Equilibrium|Subgame Perfect Equilibrium]]. Within the subgame, starting after the signal realization, if the set $A(\mu)$ contains multiple optimal actions for the receiver, the receiver breaks the tie in favor of the action that maximizes the sender's expected payoff $\mathbb{E}_{\mu}[u_{S}(a,\theta)]$. 


> [!definition] Definition (Receiver's Optimal Action).
> Consider any Sender-Preferred [[Subgame Perfect Nash Equilibrium|Subgame Perfect Equilibrium]], and let $\hat{a}(\mu)$ denote the Receiver's action given belief $\mu \in\Delta(\Theta)$ in this equilibrium. That is, 
> $$
> \hat{a}(\mu)\in \argmax_{a\in A(\mu)}\, \mathbb{E}_{\mu}[u_{S}(a,\theta)]
> $$

^ml-def-receivers-optimal-action

The equilibrium action, $\hat{a}(\mu)$, is therefore chosen from $A(\mu)$ such that it maximizes the sender's expected payoff over the entire set. The sender therefore maximizes their own expected payoffs with respect to equilibrium action $\hat{a}(\mu)$ and belief $\mu$, through the [[Sender's Indirect Utility Function]].

$A(\mu)$ is precisely the **best response** to the information received, given by the posterior belief, and since the action $\hat{a}(\mu)$ is a part of an [[Subgame Perfect Nash Equilibrium|SPE]], it too must be a best response to the information structure provided by the sender.