---
up: "[[Information Partitions and Knowledge]]"
aliases:
tags:
  - concept/definition
mathLink: $\text{Evident } A\text{ if } A\subseteq K(A)$
---
> [!definition] Definition (Evident Events).
> The event $A\subseteq\Omega$ is **evident** (or public) if $A\subseteq K(A)$. 

That is, an event is public if it is contained in the set of events under [[Common Knowledge#^ml-def-mutual-knowledge|mutual knowledge]], where all agents know it to be true. It forms the basis for the third definition of [[Common Knowledge]], and [[Lemma. Common Learning Characterization via Evident q-Belief|provides a characterization of the common q-belief]].

>[!intuition]
>Think of $E$ as a kind of **public signal**: when it occurs, no agent can miss it, and they all know that everyone else also sees it. If such an evident event guarantees that $A$ is known, then $A$ becomes common knowledge.

## Discussion

### Characterization 

>[!theorem] Theorem (Evident events as union of meet blocks).
>For $\mathcal{I} = \{1, 2\}$, an event $E \subseteq \Omega$ is evident if and only if it is a union of elements of the [[Meet of Information Partitions]] $\Pi_1 \wedge \Pi_2$. 

#### Proof Sketch
- **($\implies$)** If $E$ is evident, then for every $\omega \in E$, we have $\Pi_1(\omega) \subseteq E$ and $\Pi_2(\omega) \subseteq E$ (one-step closure). The entire meet-block containing $\omega$ must be in $E$.
- **($\impliedby$)** If $E$ is a union of meet elements, then for any $\omega \in E$, both $\Pi_1(\omega)$ and $\Pi_2(\omega)$ are contained in $((\Pi_1 \wedge \Pi_2)(\omega)) \subseteq E$.

### Properties

- **Public Recognition**: When an evident event occurs, everyone immediately recognizes it
- **Meet Structure**: Evident events are exactly the unions of meet blocks
- **Closure Property**: If $E$ is evident, then, [[Mutual Knowledge]] $K(E) = E$
- **Intersection Property**: The intersection of evident events is evident
- **Union Property**: The union of evident events is evident


```tikz
\usetikzlibrary{arrows.meta,decorations.pathreplacing}
\begin{document}
\begin{tikzpicture}[x=1.15cm,y=1.15cm,font=\small]
    % Highlight evident event E = {1,2,3,4,5}
    \filldraw[green!25,draw=green!55!black,rounded corners=6pt,thick]
        (-0.55,-0.55) rectangle (4.55,0.55);

    % State nodes
    \foreach \i/\state in {0/1,1/2,2/3,3/4,4/5,5/6} {
        \node[circle,draw=black,thick,fill=white,minimum size=9mm] (s\state) at (\i,0) {$\state$};
    }

    % Pi_1 blocks (top row)
    \draw[rounded corners=6pt,thick,blue!70,fill=blue!12]
        (-0.45,1.1) rectangle (2.45,1.6);
    \draw[rounded corners=6pt,thick,blue!70,fill=blue!12]
        (2.55,1.1) rectangle (4.45,1.6);
    \draw[rounded corners=6pt,thick,blue!70,fill=blue!6]
        (4.55,1.1) rectangle (5.45,1.6);
    \node[anchor=east,blue!70] at (-0.65,1.35) {$\Pi_1$ blocks};

    % Pi_2 blocks (bottom row)
    \draw[rounded corners=6pt,thick,red!70,dashed,fill=red!12]
        (-0.45,-1.6) rectangle (1.45,-1.1);
    \draw[rounded corners=6pt,thick,red!70,dashed,fill=red!12]
        (1.55,-1.6) rectangle (3.45,-1.1);
    \draw[rounded corners=6pt,thick,red!70,dashed,fill=red!12]
        (3.55,-1.6) rectangle (4.45,-1.1);
    \draw[rounded corners=6pt,thick,red!70,dashed,fill=red!6]
        (4.55,-1.6) rectangle (5.45,-1.1);
    \node[anchor=east,red!70] at (-0.65,-1.35) {$\Pi_2$ blocks};

    % Evident cluster annotation
    \node[anchor=west,green!50!black,align=left] at (5.5,0.45)
        {$E=\{1,2,3,4,5\}$ is evident};

    % Knowledge inclusion arrows
    \draw[-{Latex[length=3mm]},thick,green!60!black]
        (3.6,0.55) .. controls (4.2,1.05) and (4.6,1.25) .. (6.0,1.35);
    \node[anchor=west,green!60!black,align=left] at (6.05,1.35)
        {$\Pi_1(\omega) \subseteq E$\newline for every $\omega \in E$};

    \draw[-{Latex[length=3mm]},thick,green!60!black]
        (3.6,-0.55) .. controls (5.2,-1.05) and (5.6,-1.25) .. (6.0,-1.35);
    \node[anchor=west,green!60!black,align=left] at (6.05,-1.35)
        {$\Pi_2(\omega) \subseteq E$\newline for every $\omega \in E$};
\end{tikzpicture}
\end{document}
```

---
**Defines:** [[Common Knowledge#^ml-def-common-knowledge-evident]] and [[Lemma. Common Learning Characterization via Evident q-Belief]]
