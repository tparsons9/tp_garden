---
up: "[[Information Partitions and Knowledge]]"
aliases:
tags:
  - concept/definition
related:
  - "[[Meet of Partitions]]"
---
> [!definition] Definition (Meet of Information Partitions).
> For any sequence of information partitions $(\Pi_1, \ldots, \Pi_{|\mathcal{I}|})$, the **meet** is:
>$$
>\bigwedge_{i \in \mathcal{I}} \Pi_i \equiv \mathcal{P}_{|\mathcal{I}|}
>$$
>where $\mathcal{P}_2 = \Pi_1 \wedge \Pi_2$ and $\mathcal{P}_k = \mathcal{P}_{k-1} \wedge \Pi_k$ for $k > 2$.

This definition supports the Meet definition of [[Common Knowledge]]. 

>[!tip] Ant Walk Intuition
>You stack partitions, and group states that can be connected by "ant walks" across the partitions.

The ant's movements obey two laws:
1. The ant can move from side to side within an information partition element
2. The ant can jump across the players' information partitions along the same state

The ant's full range of motion when seeded at any state $\omega$ recovers the member of the meet that includes that state.

## Formal Characterization

>[!theorem] Theorem (Ant Walk Characterization).
>Two points $x'$ and $x''$ belong to the same element of $\bigwedge_{i \in \mathcal{I}} \Pi_i$ if and only if there is a sequence $(x_0, x_1, x_2, \ldots, x_n, x_{n+1})$, with $x_0 = x'$ and $x_{n+1} = x''$, such that for every $0 \leq m \leq n$, $x_m$ and $x_{m+1}$ belong to the same element of $\Pi_i$ for some $i \in \mathcal{I}$.



## Key Properties

### Coarsening Relationships
If two partitions $\Pi$ and $\Pi'$ satisfy:
$$
\Pi'(\omega) \subseteq \Pi(\omega) \quad \forall \omega \in \Omega
$$
then $\Pi$ is a _coarsening_ of $\Pi'$ and $\Pi'$ is a _refinement_ of $\Pi$.

### Permutation Invariance
>[!important] Order Independence
>The meet $\bigwedge_{i \in \mathcal{I}} \Pi_i$ is invariant to permutations of player indices.

This follows from defining an equivalence relation on $\Omega$:
$$
x \sim y \quad \iff \quad \exists \text{ finite sequence } (x = x_0, x_1, \ldots, x_m = y)
$$
such that for each $j$, $x_j$ and $x_{j+1}$ belong to the same cell of some $\Pi_i$.

## Visual Representation

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
% Draw partition grids
\draw[thick] (0,0) rectangle (6,0.8);
\draw[thick] (0,1.2) rectangle (6,2);

% Partition cells for Pi_1 = {{1,2,3}, {4,5}, {6}}
\draw[thick] (3,0) -- (3,0.8);
\draw[thick] (5,0) -- (5,0.8);

% Partition cells for Pi_2 = {{1,2}, {3,4}, {5}, {6}}
\draw[thick] (2,1.2) -- (2,2);
\draw[thick] (4,1.2) -- (4,2);
\draw[thick] (5,1.2) -- (5,2);

% Connection lines between states
\foreach \x in {1,2,3,4,5,6} {
    \draw[thin, dashed, gray] (\x-0.5,0.8) -- (\x-0.5,1.2);
}

% State numbers
\foreach \x in {1,2,3,4,5,6} {
    \node at (\x-0.5,0.4) {\x};
    \node at (\x-0.5,1.6) {\x};
}

% Labels
\node[left] at (0,0.4) {$\Pi_1$};
\node[left] at (0,1.6) {$\Pi_2$};

% Ant movements
\draw[<->, red, thick] (0.3,0.15) -- (2.7,0.15);
\draw[<->, red, thick] (3.3,0.15) -- (4.7,0.15);
\draw[<->, blue, thick] (0.3,1.85) -- (1.7,1.85);
\draw[<->, blue, thick] (2.3,1.85) -- (3.7,1.85);

\node[below] at (3,-0.3) {$\Pi_1 \wedge \Pi_2(\omega)$ includes all states an ant seeded at $\omega$ can reach};
\end{tikzpicture}
\end{document}
```

## Examples
>[!example] Basic Meet
>$\Pi_1 = \{\{1,2,3\}, \{4,5\}, \{6\}\}$ and $\Pi_2 = \{\{1,2\}, \{3,4\}, \{5\}, \{6\}\}$
>
>The meet $\Pi_1 \wedge \Pi_2 = \{\{1,2,3,4,5\}, \{6\}\}$

