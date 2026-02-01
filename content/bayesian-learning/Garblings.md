---
up: "[[Stochastic Ordering]]"
aliases:
tags:
  - concept/definition
  - partial-order
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
mathLink-blocks:
  def-garbling: $\sigma^{\prime}(s^{\prime}\mid  \theta)= \int_{s\in S}\gamma(s^{\prime}\mid  s)\sigma(s\mid  \theta)\,ds$
---

>[!tldr]
>Garblings provide one foundational perspective for ordering signals by informativeness: **$P$ is a garbling of $Q$ means $Q$ is (at least) as informative as $P$**. This concept is central to the [[Blackwell Order]], which characterizes when one signal is more informative than another for **all** possible decision problems.
>
>It is one of five (equivalent) ways to define the universal partial order for comparing information structures.

We may consider a signal to be more informative than another if the latter is a _noised-up version_ of the former.

## Definitions 

Recall that when the set of states and the set of signal realizations are finite, we can represent any signal as a [[Markov Matrix]].

### Finite Case 

> [!definition] Definition (Finite Garblings).
> A [[Markov Matrix]] $P$ is a **garbling** or Markov matrix $Q$ if there exists a Markov matrix $M$ such that $QM=P$.

$M$ represents a **randomizing** or **garbling** device that maps a realization of the original single $Q$ to a distribution over the realizations of the coarser signal $P$. It effectively adds noise to $Q$'s output to produce $P$.

As an example, consider the signals $P$ and $Q$ below for $\theta=\{ \theta_{1},\theta_{2} \}$: 

$$
\underbrace{ \begin{pmatrix}
\frac{9}{16} & \frac{3}{16} & \frac{3}{16} & \frac{1}{16} \\
\frac{1}{16} & \frac{3}{16} & \frac{3}{16} & \frac{9}{16} 
\end{pmatrix} }_{ Q }\cdot \underbrace{ \begin{pmatrix}
1 & 0 \\
1 & 0 \\
0 & 1 \\
0 & 1
\end{pmatrix} }_{ M } = \underbrace{ \begin{pmatrix}
\frac{3}{4} & \frac{1}{4} \\
\frac{1}{4} & \frac{3}{4}
\end{pmatrix} }_{ P }
$$
where $M$ is a Markov matrix, we can conclude that $P$ is a garbling of $Q$.

We can label the possible realizations of the first [[Information Structure|information structure]] $P$ as $s_{1}$ and $s_{2}$, and consider the signal which is two independent realizations of $P$. The set of possible realizations of this _new_ signal is then $\{ s_{1}s_{1},s_{1}s_{2},s_{2}s_{1},s_{2}s_{2} \}$ with the conditional distributions over these realizations given precisely by $Q$. So observing $P$ is statistically equivalent to observing $Q$ and forgetting the second realization. Clearly then $P$ is less informative than $Q$.

### General Case 

> [!definition] Definition (Garbling).
> The signal $\sigma^{\prime}:\Theta\to\Delta(S^{\prime})$ is a **garbling** of the signal $\sigma:\theta\to\Delta(S)$ if there exists a Markov kernel $\gamma:S\to\Delta(S^{\prime})$ such that
> $$
> \sigma^{\prime}(s^{\prime}\mid  \theta)= \int_{s\in S}\gamma(s^{\prime}\mid  s)\sigma(s\mid  \theta)\,ds
> $$

^def-garbling

The [[Markov Kernel]] $\gamma:S\to\Delta(S^{\prime})$ acts exactly as a randomizing device, taking a realization $s \in S$ from the original signal structure $\sigma$ and maps it to a **probability measure** $\gamma(s^{\prime}\mid s)$ on the set of garbled signal realizations $S^{\prime}$.

Since $\gamma$ introduces randomness _after_ the informative signal $\sigma$ is realized, the resulting signal $\sigma^{\prime}$ is _less informative_ (or a **garbling**) of $\sigma$.

## Discussion 

> [!remark|4.1] On the relationship between garblings and conditional independence
>
> Let $X$ and $X'$ respectively denote the random realizations of signals $\sigma$ and $\sigma'$. The property that $\sigma'$ is a garbling of $\sigma$ does **not** uniquely pin down the joint distribution of $(\theta, X, X')$.
>
> What it *guarantees* is that there **exists** a way of generating these variables such that $\theta$ is independent of $X'$ conditional on $X$, in which case $\theta | X$ is identical in distribution to $\theta | X, X'$. However, other ways of generating the variables—still consistent with $\sigma'$ being a garbling of $\sigma$—can yield **different relationships**.

>[!example] Example (Dependent Noise).
>
> Suppose $\theta \sim N(0, 1)$, $\varepsilon_1 \sim N(0, 1)$, and $\varepsilon_2 \sim N(0, 2)$ are mutually independent, with:
> $$X = \theta + \varepsilon_1 \quad \text{and} \quad X' = \theta + \varepsilon_2$$

Clearly $X'$ is a garbling of $X$. If we assume $\varepsilon_2 = \varepsilon_1 + \delta$ where $\delta \sim N(0, 1)$ is independent noise, then:
 - $X'$ is **independent of** $\theta$ **conditional on** $X$ ✓
- $X'$ is **not independent of** $X$ **conditional on** $\theta$ (they share component $\varepsilon_1$)

conditioning on  is not enough to make  and $X^{\prime}$ independent. They are further related through the common component $\varepsilon_{1}$.

But if instead we assume $\varepsilon_1$ and $\varepsilon_2$ are **independent**, the reverse holds:
- $X'$ is **not independent of** $\theta$ **conditional on** $X$ (since $X'$ provides additional information about $\theta$)
- $X'$ is **independent of** $X$ **conditional on** $\theta$

>[!insight] 
>Garblings capture a **statistical information structure** but don't constrain how that structure arises causally or probabilistically.

