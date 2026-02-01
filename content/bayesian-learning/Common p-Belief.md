---
up: "[[Information Partitions and Knowledge]]"
aliases:
  - common p-belief
  - common q-belief
tags:
  - concept/definition
  - bayes/learning
  - micro/information
mathLink-blocks:
  ml-def-common-q-belief: $C_{t}^{q}(F)=\bigcap_{n\geq 1}[B_{t}^{q}]^{n}(F)$
---
The **common p-belief** relies on the construction of [[p-belief]] as the measure of an agent's subjective confidence in an event being true. It is useful for defining [[Common Knowledge]] between agents, as well as [[Common Learning]], or the convergence of beliefs. 

## Definitions 

### Under Knowledge

> [!definition] Definition (Common p-belief – Recursive).
> For any $p \in [0,1]$ and event $A \subseteq \Omega$, define:
>- $A^1 = \bigcap_{i \in \mathcal{I}} B^p_i(A)$ (everyone p-believes $A$)
>- $A^k = \bigcap_{i \in \mathcal{I}} B^p_i(A^{k-1})$ for $k \geq 2$
>
>Then $A$ is **common p-belief** at the set of states:
>$$
>A^{\infty} = \bigcap_{n \geq 1} A^n
>$$

^ml-def-common-p-belief-recursive

> [!definition] Definition (Common p-belief – Evident Event).
> For any $p \in [0,1]$, the event $A \subseteq \Omega$ is **common p-belief** at $\omega$ if there exists an evident p-belief event $E$ such that:
>$$
>\omega \in E \subseteq \bigcap_{i \in \mathcal{I}} B^p_i(A)
>$$

^ml-def-common-p-belief-evident-events
### Learning 

This can be extended to the concepts under [[Common Learning]], in which we study the convergence of [[Common Knowledge]]. 


> [!definition] Definition (Common q-Belief).
> For any $q \in[0,1]$, and (measurable) event $F$, there is a **common $q$-belief** in $F$ at time $t$ on 
> $$
> C_{t}^{q}(F)=\bigcap_{n\geq 1}[B_{t}^{q}]^{n}(F) 
>$$
> where $B_{t}^{q}(F)=\bigcap_{i\in \mathcal{I}}B_{it}^{q}(F)$

^ml-def-common-q-belief

The definition states that every agent [[p-belief#^ml-def-q-belief|q-believes]] $F$, every agent $q$-believes that every agent $q$-believes $F$, and so on, _ad infinitum_. 

By [[p-belief#^ml-def-q-belief]] , we can alternatively characterize this by setting $F^{1}=\bigcap_{i \in \mathcal{I}}B_{i}^{q}(F)$ to be the set of states where every agent mutually q-believes $F$, and recursively define $F^{k}=\bigcap_{i \in \mathcal{I}}B_{i}^{q}(F^{k-1})$ for $k\geq 2$ (every agent q-believes that every agent q-believes $\dots$ $k$ times $F$). 

An alternative characterization can be defined using the concept of [[Lemma. Common Learning Characterization via Evident q-Belief|evident q-belief]] event $E$, where $E$ itself implies that every agent $q-$believes $E$, i.e., $E\subseteq \bigcap_{i \in \mathcal{I}}B_{i}^{q}(F)$

>[!insight]
>The definition formalizes the idea of **"almost common knowledge**". It maintains the hierarchical structure of common knowledge but requires agents to hold a certain level of confidence $(q)$ rather than absolute certainty $(q=1)$. 

## Properties

- **Monotonicity in p**: If $p' \leq p$, then $B^p_i(A) \subseteq B^{p'}_i(A)$
- **Equivalence**: Definitions 1 and 2 are equivalent (Monderer & Samet, 1989)
- **Limiting Case**: As $p \to 1$, common p-belief approaches common knowledge
- **Continuity**: Unlike the email game's discrete levels, p-belief provides continuous relaxation

## Discussion



### Connection to the email game 

In [[Rubinstein (1989)'s Email Game]], 

| Aspect                | p-Belief                    | Email Game                  |
| --------------------- | --------------------------- | --------------------------- |
| **Approach**          | Common probabilistic belief | High finite-order knowledge |
| **Parameter**         | Continuous $p \in [0,1]$    | Discrete rounds $T_1, T_2$  |
| **Limiting Behavior** | Smooth approach to CK       | Discontinuous jump at CK    |
| **Interpretation**    | Uncertainty tolerance       | Communication reliability   |
