---
up: "[[Bayesian Learning]]"
aliases:
  - Blackwell-Dubins
tags:
  - concept/theorem
  - bayes/learning
---
The following shows that, as long as two Bayesian agents do not dogmatically disagree (i.e., their priors are mutually absolutely continuous), their beliefs about all future events will eventually converge to one another as they observe the same [[Sequential Signal Model|infinite sequence of signals]]. 

---

Assume that for each $t\geq 1$, a unique conditional probability distribution $P^{t}(x_{1},\dots,x_{t})(C)$ exists for all realized sequences $x_{1},\dots,x_{t}\in \mathcal{X_{1}}\times\dots \times \mathcal{X}_{t}$ and unknown events $C \in \mathcal{B}_{t+1}\times \mathcal{B}_{t+2}\times\dots$. Even if players start out with different prior beliefs, their conditional beliefs will merge to one another in a strong sense.

> [!proposition] Proposition (Blackwell-Dubins).
> Suppose that $p,\tilde{p}\in\Delta(\Theta)$ are [[Absolute Continuity|absolutely continuous]] with respect to one another, and define $P,\tilde{P}$ to be the measures on $\Omega$ induced by the respective priors $p,\tilde{p}$, and the family $(P_{\theta})_{\theta \in\Theta}$. Then,
>
> $$
> \lim_{ t \to \infty } d_{TV}(P^{t}(x_{1},\dots,x_{t}),\  \tilde{P}^{t}(x_{1},\dots,x_{t})) =0\qquad P-\text{a.s.} 
>$$
>
>where $d_{TV}(\cdot,\cdot)$ is the [[Total Variation Distance]].

The statement says that if two agents hold different prior beliefs about the parameter but agree on the set of measure-zero events, then their conditional beliefs merge in the strong sense: For ***all*** measurable future events, agents eventually assign similar probabilities.

### Comparison to Doob's Consistency Theorem

Consider the problem of learning the unknown bias of a coin, parameterized to $p \in [0,1]$. A coin whose bias is $p$ lands on Heads with probability $p$ and lands on tails with probability $1-p$. Two agents have different prior beliefs on $[0,1]$ and each observe $t$ independent flips of the coin.

[[Doob's Consistency Theorem]] says that the two agents will eventually learn the bias of the coin as $t$ grows large. Blackwell-Dubins instead says: Suppose two agents have observed $t$ independent flips of the coin; then, their beliefs over all events regarding the future–e.g., that over half the remaining coin flips will turn up Heads, or that the limiting fraction of Heads realizations is 1/2–must eventually become close (uniformly across such events).

That is, 
- (Doob's Consistency Theorem): an agent's posterior belief will converge to a point mass on the _true parameter_. It's about agents learning the _truth_. 
- **Merging** (Blackwell-Dubins): Two agents' beliefs will converge _to each other_. It's about agents _agreeing_ on the probabilities of all future events, regardless of whether they have fully learned the true state yet. 

