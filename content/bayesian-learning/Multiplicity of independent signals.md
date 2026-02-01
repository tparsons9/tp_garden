---
up: "[[Information Structure]]"
aliases:
  - Product Signal
tags:
  - concept/property
  - micro/information
---
For a given parameter/state space $\Theta$ and set of [[Information Structure|signal]] realizations $S$,

> [!definition] Definition (Product Signal).
> For any two signals $\sigma:\Theta\to\Delta(S)$ and $\sigma^{\prime}:\Theta\to\Delta(S^{\prime})$, let $\sigma\otimes\sigma^{\prime}$ denote the **product signal**,
>
> $$
> \sigma \otimes\sigma^{\prime}:\Theta\to\Delta(S \times S^{\prime}) 
>$$
>
> where $\sigma \otimes\sigma^{\prime}(s,s^{\prime}\mid \theta)=\sigma(s\mid \theta)\sigma(s^{\prime}\mid\theta)$.
>

That is, the probability of observing the joint realization $(s,s^{\prime})$ conditional on the state $\theta$ is defined as the product of the individual [[Conditional Probability|conditional probabilties]].

The _product signal_ maps the unknown state $\theta$ to a [[Probability Distribution|probability distribution]] over the _joint realization space_ $S \times S^{\prime}$. Independence is guaranteed by construction of the product signal.

By the definition of [[Conditional independence]], two random events $A$ and $B$ are conditionally independent given a third event $C$ if and only if their joint probability given $C$ is the product of their individual probabilities given $C$:

$$
P(A\cap B\mid  C)=P(A\mid  C)\cdot P(B\mid  C)
$$

where, under the context of the product signal,
- $A$ is the event that the first signal realization is $s$
- $B$ is the event that the second signal realization is $s^{\prime}$
- $C$ is the state $\theta$.

## Discussion

The significance of the definition lies in its representation of **conditionally independent information:**

### Isolation of Non-Redundant Information

Under [[Signal Dispersion and Informativeness]] and [[Information Costs]], theorists need to distinguish between signals that are genuinely distinct and those that are redundant.

If two sources of information, $X$ and $X^{\prime}$, are observed jointly, they might provide overlapping or redundant information about the state $\theta$. For example, if $X^{\prime}=X+\varepsilon$, observing $X^{\prime}$ tells you something about $X$ even if the true state $\theta$ were fixed, because the error term is assumed independent of $\theta$.

The product signal $\sigma \otimes\sigma^{\prime}$ **guarantees** non-redundancy, conditional on the state. Since the occurrence of realization $s$ does not influence the probability of $s^{\prime}$ (once $\theta$ is known), we are ensuring that the two components of the composite signal represent distinct, statistically separable sources of information relevant to $\theta$. 

If the signals were correlated, even after conditioning on $\theta$, combining them would incur a _smaller cost_ relative to the sum of individual costs: information content would overlap. 

### Requirement for Additive Cost 

The construction of the product rule in this manner stems from the desired properties of [[Prior-Independent Information Costs|Prior-Independent cost functions]], forming the basis for the fundamental axiom in [[Axioms for Prior-independent Information Cost (PST 2020)]], [[The cost of two independent signals must be additive]]. 

This additivity is only possible because of the measure of uncertainty/dispersion used to define the costs: [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]] with the key property: [[= Additivity of KL-Divergence for Independent Distributions]] .  Since $C(\sigma)$ is built upon KL-divergence, the only way to satisfy the axiom is for signals to be mathematically independent, conditional on the state.  