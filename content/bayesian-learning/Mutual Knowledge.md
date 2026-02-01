---
up: "[[Information Partitions and Knowledge]]"
aliases:
  - mutual knowledge
tags:
  - concept/definition
  - micro/information
---

> [!definition] Definition (Mutual Knowledge).
> The set of states at which the event $A \subseteq \Omega$ is **mutual knowledge** is:
>$$
>K(A) = \bigcap_{i \in \mathcal{I}} K_i(A) = \bigcap_{i \in \mathcal{I}} \{ \omega : \Pi_i(\omega) \subseteq A \}
>$$
>i.e., all agents know $A$ to be true.

Mutual knowledge means "everyone knows $A$". It is the intersection of all individual knowledge sets. Think of it as stacking each agent's partition - an event is mutual knowledge where both partitions line up fully inside of $A$.

## Properties
- **Intersection Property**: $K(A) = \bigcap_{i \in \mathcal{I}} K_i(A)$
- **Subset Relations**: $K(A) \subseteq K_i(A)$ for all $i$ (mutual knowledge implies individual knowledge)
- **Distribution**: $K(A \cap B) = K(A) \cap K(B)$
- **Monotonicity**: If $A \subseteq B$, then $K(A) \subseteq K(B)$

>[!example] Mutual vs Individual Knowledge
>Consider $\Pi_1 = \{\{1,2,3\}, \{4,5\}, \{6\}\}$ and $\Pi_2 = \{\{1,2\}, \{3,4\}, \{5\}, \{6\}\}$.
>For event $A = \{3,4,5,6\}$:
>- $K_1(A) = \{4,5,6\}$ (agent 1 knows $A$ at states 4,5,6)
>- $K_2(A) = \{3,4,5,6\}$ (agent 2 knows $A$ at states 3,4,5,6)
>- $K(A) = K_1(A) \cap K_2(A) = \{4,5,6\}$ (mutual knowledge)


Mutual knowledge is weaker than [[Common Knowledge]]. While everyone knows $A$, they may not know that everyone knows $A$, and so on.