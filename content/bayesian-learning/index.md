---
title: Bayesian Learning
up: "[[Information Theory]]"
aliases:
  - "Bayesian Learning"
tags:
  - bayes/learning
  - micro/information
---

> [!abstract] Quick Navigation
> **Foundations:** [[Information Theory]] | [[Properties of Information]] | [[Shannon Entropy]] | [[Cross Entropy]] | [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]]
> **Partitions & Knowledge:** [[Information Partitions and Knowledge]] | [[Knowledge Operator]] | [[Common Knowledge]] | [[Mutual Knowledge]] | [[p-belief]] | [[Common p-Belief]] | [[Aumann's "Agreeing to Disagree" (1976)|Aumann's Agreement]]
> **Information Structure:** [[Information Structure]] | [[Signal Dispersion and Informativeness]] | [[Blackwell Order]] | [[Garblings]]
> **Bayesian Persuasion:** [[Bayesian Persuasion]] | [[Value of a Signal (Kamenica-Gentzkow)|Value of a Signal]] | [[When (Bayesian) Persuasion is valuable|When Persuasion is Valuable]]
> **Information Costs:** [[Information Costs]] | [[Prior-Dependent Information Costs|Prior-Dependent]] | [[Prior-Independent Information Costs|Prior-Independent]] | [[Posterior Separable Cost Function|Posterior Separable]]
> **Bayesian Learning:** [[Sequential Signal Model]] | [[Doob's Consistency Theorem]]
> **Agreement:** [[Merging of Beliefs (Blackwell-Dubins)]] | [[Asymptotic Agreement of Beliefs]] | [[Expected Disagreement Reduction from Information]]
> **Individual & Common Learning:** [[Individual Learning]] | [[Common Learning]] | [[Individual Learning implies Common Learning]]
> **Misspecification:** [[Dogmatism as a critique of Bayesian Learning|Dogmatism]] | [[Model Uncertainty and Misspecification under Bayesian Learning|Model Misspecification]] | [[Berk's Consistency Result]] | [[Failure of Asymptotic Agreement in Learning|Failure of Agreement]]
> **Berk-Nash Equilibrium:** [[Berk-Nash Equilibrium]] | [[Berk-Nash Equilibrium - Single Agent|Single Agent]] | [[Berk-Nash Equilibrium - Simultaneous Games|Simultaneous Games]]

---
## Notation

- $(\Theta,d_{\Theta})$ a complete and separable metric space endowed with its Borel $\sigma$-algebra $\Sigma$
- $p \in\Delta(\Theta)$ the probability measure on $\Theta$
- $(\mathcal{X},d_{X})$ the space of signal realizations endowed with Borel $\sigma$-algebra $\mathcal{B}$
- $X_{1},X_{2},\dots$ the infinite sequence of signal realizations taking values in the set $\mathcal{X}^{\infty}=\mathcal{X}_{1}\times \mathcal{X}_{2}\times\dots$ where each $\mathcal{X}_{t}$ is a copy of $\mathcal{X}$
	- conditional on realized $\theta$, the signals $X_{1},X_{2},\dots$ are generated iid according to conditional density $f_{\theta}$, where we refer to each $X_{t}$ as the period-$t$ signal. 
- $\Omega=\Theta \times \mathcal{X}^{\infty}=\Theta \times \mathcal{X}_{1}\times \mathcal{X}_{2}\times\dots$ is the full state space with the product sigma algebra $\Sigma \times \mathcal{B}_{1}\times \mathcal{B}_{2}\times\dots$ where each $\mathcal{B}_{t}$ is a copy of $\mathcal{B}$. 
- Use:
	- $P$ to denote the measure on $\Omega$ induced by $p$ and the family $(f_{\theta})_{\theta \in\Theta}$
	- $P_{\theta}$ to denote the conditional measure on $\mathcal{X}^{\infty}$ when the parameter is $\theta$. 

---
## The Central Questions

Bayesian learning addresses three fundamental questions about rational agents updating beliefs:
1. **Do agents eventually learn the truth?**
2. **Do agents eventually agree with each other?**
3. **Do agents know that they've all learned the truth?**

These questions matter profoundly for markets, science, coordination, and whether shared experience can overcome differences in worldviews.

---

## Part I: The Framework and What Agents Can Learn

### The Setting

The [[Sequential Signal Model]] establishes the basic environment: there's an unknown parameter θ, and agents observe an infinite sequence of signals generated i.i.d. conditional on this parameter. The strong law of large numbers guarantees that signal frequencies converge to their true probabilities along almost every sequence. Once agents observe the long-run frequencies, Bayes' Rule updates their beliefs about which parameter could have generated those frequencies.


[[Doob's Consistency Theorem]] shows that when identifiability holds, Bayesian agents almost surely learn the truth. More precisely, their posterior beliefs converge to a point mass on the true parameter, and any function of the parameter (computed using posterior beliefs) converges to its true value. However, when agents are [[Dogmatism as a critique of Bayesian Learning|dogmatic]] in their beliefs, this can lead to strange results. Solutions to the [[Dogmatism as a critique of Bayesian Learning]] are seen in [[Model Uncertainty and Misspecification under Bayesian Learning]]. 


### When Beliefs Merge

[[Merging of Beliefs (Blackwell-Dubins)]] shows that if two agents' priors are [[Absolute Continuity|absolutely continuous]] with respect to each other—meaning they agree on what's possible, even if they disagree on probabilities—then their beliefs converge to each other as they observe the same signals.

This is distinct from Doob's result: Doob says agents learn the truth; Blackwell-Dubins says agents come to *agree* with each other about all future events, even before fully learning the truth.

**Why this matters:** This explains why shared experience can overcome differences in prior beliefs, as long as people don't completely rule out possibilities the other considers. It provides a formal basis for expecting convergence in scientific communities or among traders in markets.

### How Information Reduces Disagreement

[[Expected Disagreement Reduction from Information]] formalizes how agents expect their disagreement to shrink with more informative signals. Under certain conditions (MLRP and likelihood ratio dominance), each agent expects that more informative experiments will bring the other's belief closer to their own prior.

**Why this matters:** This shows that both agents *want* better information—they both expect it will vindicate their own views. This connects to debates about information acquisition and why people might seek out evidence that could challenge their beliefs.

### Individual vs. Common Learning

Even if all agents individually learn the truth, this doesn't mean they have common knowledge of this learning. The distinction is crucial:

- [[Individual Learning]]: Each agent eventually becomes highly confident in the true parameter
- [[Common Learning]]: It becomes common knowledge that everyone is highly confident in the true parameter

Individual learning uses [[p-belief|q-belief]]—an agent q-believes an event if they assign it probability at least q. Common learning requires [[Common p-Belief|common q-belief]]—every agent q-believes the event, every agent q-believes that every agent q-believes it, and so on infinitely.

[[Individual Learning implies Common Learning]] provides two key results:

1. **Conditional Independence**: If agents' signals are conditionally independent given the parameter, individual learning implies common learning. This covers both perfectly correlated (public) signals and completely independent private signals.

2. **Finite Signal Spaces**: If signal realizations are finite, individual learning always implies common learning, even with correlated signals.


The [[Lemma. Common Learning Characterization via Evident q-Belief]] provides the technical tool for proving common learning results. Instead of checking the infinite hierarchy of beliefs directly, we can construct "evident" events—events that are self-evidently q-believed when they occur. If such events happen with high probability and imply q-belief in the true state, common learning occurs.

**Why this matters:** This lemma transforms common learning from an abstract infinite recursion into something verifiable. It provides the analytical machinery for understanding exactly when information structures enable not just individual learning, but genuine common knowledge.

## The Big Picture: What Determines Convergence?

The Bayesian learning framework reveals a hierarchy of convergence:

1. **Learning the truth** (Doob): Requires only identifiability
2. **Agreement** (Blackwell-Dubins): Requires non-dogmatic priors (absolute continuity)
3. **Common knowledge of learning** (Common Learning): Requires appropriate information structure—either conditional independence or finite signals

Each level is progressively harder to achieve and requires stronger conditions. The optimistic message is that rational agents do converge under reasonable conditions. The cautionary message is that the information structure—not just the quantity of data—fundamentally determines what kinds of convergence are possible.


---

#### Citations 

Martin Cripps et al., “Common Learning,” Cripps, M. and Ely, J. and Mailath, G. and Samuelson, L. (2007) Common Learning. Working Paper. ELSE Working Papers (254). ESRC Centre for Economic Learning and Social Evolution, London, UK. 76 (August 2006). [[CrippsEtAl2006Commonlearning.pdf]]

