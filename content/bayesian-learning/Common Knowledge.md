---
up: "[[Information Partitions and Knowledge]]"
aliases:
tags:
  - concept/definition
---
The event $A$ is **common knowledge** at state $\omega$ if both agents know it to be true, know the other to know it to be true, ad infinitum. While [[Mutual Knowledge]] says that, 

> *"Everyone knows $A$"*


common knowledge adds an infinite tower of mirrors–everyone knows everyone nows, everyone knows everyone knows everyone knows, etc.

> [!definition] Definition 1 (Common Knowledge - Recursive).
> For any event $A\subseteq\Omega$, define $\mathcal{A}^{1}:=\bigcap_{i \in \mathcal{I}}K_{i}(A)$ to be the set of states at which every agent knows $A$, and recursively define,
> $$
> \mathcal{A}^{k}:=\bigcap_{i \in \mathcal{I}}K_{i}(\mathcal{A}^{k-1}) 
>$$
> for each $k\geq 2$. The set of states at which $A$ is common knowledge is $\mathcal{A}^{\infty}:=\bigcap_{n\geq 1}\mathcal{A}^{n}$. 

^ml-def-common-knowledge-recursive

> [!definition] Definition (Common Knowledge - Meet).
> An event $A \subseteq \Omega$ is common knowledge at state $\omega \in \Omega$ if:
>$$
>\bigwedge_{i \in \mathcal{I}} \Pi_i(\omega) \subseteq A
>$$
>where $\bigwedge_{i \in \mathcal{I}} \Pi_i$ is the [[Meet of Information Partitions]].

^ml-def-common-knowledge-meet

> [!definition] Definition (Common Knowledge - Evident Events).
> The event $A\subseteq\Omega$ is common knowledge at $\omega$ if and only if there is an evident event $E$ such that $\omega \in E$ and $E\subseteq K(A)$. 

^ml-def-common-knowledge-evident

## Discussion

### Equivalence of the three definitions

> [!theorem] Theorem (Common Knowledge Equivalence).
> The following three characterizations of common knowledge are equivalent for any event $A \subseteq \Omega$:
>
>**Definition 1 (Recursive):** $A$ is common knowledge at $\omega$ if $\omega \in \mathcal{A}^{\infty} := \bigcap_{n \geq 1} \mathcal{A}^n$
>
>**Definition 2 (Meet):** $A$ is common knowledge at $\omega$ if $\bigwedge_{i \in \mathcal{I}} \Pi_i(\omega) \subseteq A$
>
>**Definition 3 (Evident Events):** $A$ is common knowledge at $\omega$ if there exists an [[Evident Event|evident event]] $E$ such that $\omega \in E$ and $E \subseteq K(A)$

Show circular equivalence: (1) ⟹ (2) ⟹ (3) ⟹ (1)

>[!note]- Proof Outline
>`\begin{proof}`
>
>**Part 1: Definition 1 ⟹ Definition 2**
>
>Suppose $\omega \in \mathcal{A}^{\infty}$. We need to show $\bigwedge_{i \in \mathcal{I}} \Pi_i(\omega) \subseteq A$.
>
>By definition of the recursive sequence, $\omega \in \mathcal{A}^n$ for all $n \geq 1$.
>In particular, $\omega \in \mathcal{A}^1 = K(A)$, so every agent knows $A$ at $\omega$.
>
>The key insight is that the recursive process stabilizes at the meet: the infinite intersection $\mathcal{A}^{\infty}$ equals the set of states where the meet block is contained in $A$.
>
>**Part 2: Definition 2 ⟹ Definition 3**
>
>Suppose $\bigwedge_{i \in \mathcal{I}} \Pi_i(\omega) \subseteq A$. Let $E$ be the union of all meet blocks contained in $A$.
>
>By the characterization of [[Evident Events]], $E$ is evident since it's a union of meet blocks.
>Moreover, $\omega \in E$ and $E \subseteq K(A)$ by construction.
>
>**Part 3: Definition 3 ⟹ Definition 1**
>
>Suppose there exists evident $E$ with $\omega \in E$ and $E \subseteq K(A)$.
>
>Since $E$ is evident, $E \subseteq K(E)$. Combined with $E \subseteq K(A)$, we get that whenever $E$ occurs, everyone knows $A$.
>
>By the properties of evident events and the recursive nature of knowledge operators, this implies $\omega \in \mathcal{A}^n$ for all $n$, hence $\omega \in \mathcal{A}^{\infty}$.
>`\end{proof}`

#### Key Insights
- **Recursive Stabilization**: The infinite regress in Definition 1 stabilizes at a finite level
- **Meet Characterization**: Definition 2 provides the most direct computational test
- **Public Signal**: Definition 3 connects to the idea of public announcements and evident events

#### Practical Implications
- **Verification**: Definition 2 (meet) is often easiest for checking common knowledge
- **Construction**: Definition 3 (evident events) is useful for creating common knowledge
- **Understanding**: Definition 1 (recursive) best captures the intuitive meaning


### Properties

- **Stronger than Mutual**: Common knowledge implies mutual knowledge
- **Meet Characterization**: Common knowledge events are unions of meet blocks
- **Stability**: Once established, common knowledge persists

---
see also: [[Common Learning]]

