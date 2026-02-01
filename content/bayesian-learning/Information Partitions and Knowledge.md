---
up: "[[Information Theory]]"
aliases:
tags:
  - micro/information
---
An unknown state $\omega$ takes values in the finite set $\Omega$. Agents $i \in \mathcal{I}$ share a common prior that the state $\omega$ is distributed according to $P\in\Delta(\Omega)$. Each agent $i$'s information partition $\Pi_{i}$ is a partition of $\Omega$, with the property that for any realization of the state $\omega$, agent $i$ is informed that the state belongs to $\Pi_{I}(\omega)$.

>[!assumption] Assumption 1.
>Every partition element has strictly positive probability under the prior; that is, $P(\Pi_{i}(\omega))>0$ for every agent $i\in \mathcal{I}$ and state $\omega \in \Omega$.

^ml-asm-partition-posititive-prob-under-prior

The concept of [[Knowledge Operator|knowledge]] has to do with what the agent knows about a parameter $\theta$ given the state $\omega$. [[Mutual Knowledge]] is defined as the intersection of all knowledge sets for each agent $i \in \mathcal{I}$, describing what _everyone_ knows about an event. It is a weaker concept than [[Common Knowledge]], which requires a recursive definition of knowledge that everyone knows that everyone knows the event and so on. 