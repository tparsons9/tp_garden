---
up: "[[Bayesian Learning]]"
aliases:
tags:
  - concept/proposition
---
**Expected Disagreement** gets into how information affects agents' secondary beliefs–specifically, what one agent expects another agent's updated belief to be. It focuses on how agents expect their **disagreement** to change when that information varies in its quality ([[Signal Dispersion and Informativeness|informativeness]]). 

## Setup

Assume the set of parameters $\Theta \subseteq \mathbb{R}$ is finite and ordered. Two signals $X$ and $\tilde{X}$ respectively take values in $\mathcal{X},\ \widetilde{\mathcal{X}}$, and we assume that $X$ is [[Blackwell Order|Blackwell more informative]] than $\widetilde{X}$. There are two agents, Ann and Bob, who have common knowledge of the conditional distributions $\{ f_{X\mid \theta}(x\mid \theta) \}_{\theta \in\Theta}$ and $\{ f_{\widetilde{X}\mid \theta}(\tilde{x}\mid \theta) \}_{\theta \in\Theta}$.

But Ann and Bob hold different prior beliefs, $f_{\theta}^{A},\ f_{\theta}^{B}\in\Delta(\Theta )$ about the parameter. We use $F^{A}$ and $F^{B}$ to denote their perceived joint distributions of $(\theta,X,\ \widetilde{X})$, induced by the respective priors and common signal distributions. Let $\mathbb{E}_{A}$ and $\mathbb{E}_{B}$ denote expectations with respect to these distributions.

### Assumptions


>[!assumption] Assumption 1.
>There is an order $\succ$ on $\mathcal{X}$ and an order $\widetilde{\succ}$ of $\widetilde{\mathcal{X}}$ such that the families $\{ f_{X\mid \theta}(x\mid \theta) \}_{\theta \in\Theta}$ and $\{ f_{\widetilde{X}\mid \theta}(\tilde{x}\mid \theta) \}_{\theta \in\Theta}$ each have MLRP (see [[Monotone Likelihood Ratio Property#^dacc32]]).

>[!assumption] Assumption 2.
>Bob's prior $f_{\theta}^{B}$ [[Likelihood Ratio Dominance|likelihood ratio dominates]] Ann's prior $f_{\theta}^{A}$.

The agent's prior expectations of the parameter are $\mu_{A}\equiv \mathbb{E}_{A}(\theta),\ \mu_{B}\equiv \mathbb{E}_{B}(\theta)$. We are interested in Ann's prior expectation of Bob's posterior expectation (updated to $X$), and Bob's prior expectation of Ann's posterior expectation (updated to $X$), denoted by:

$$
\begin{aligned}
\mu_{AB}(X) & \equiv \mathbb{E}_{A}[\mathbb{E}_{B}(\theta\mid  X)] \\
\mu_{BA}(X) & \equiv \mathbb{E}_{B}[\mathbb{E}_{A}(\theta\mid  X)]
\end{aligned}
$$

### Relations to Dominance Properties 

Analysis relies on the two assumptions satisfying: 
- [[Monotone Likelihood Ratio Property|MLRP]]: It is assumed that there are defined orders on signal realizations such that the families of conditional densities for both signals, $\{ f_{X\mid \theta}(\cdot\mid \theta) \}_{\theta \in\Theta}$ and $\{ f_{\widetilde{X}\mid \theta}(\cdot\mid \theta) \}_{\theta \in\Theta}$ satisfy the Monotone Likelihood ratio property 
- [[Likelihood Ratio Dominance]] (LR-dominance): This assumption is crucial because likelihood-ratio dominance implies that Bob's prior assigns relatively more weight to higher values of $\theta$ compared to Ann's prior. 

## Second-Order Beliefs 


> [!proposition] Proposition (Expected Disagreement Reduction from Information).
> Suppose that Assumptions 1 and 2 are satisfied. If $X$ is [[Blackwell Order|Blackwell more informative]] than $\widetilde{X}$, then,
>
> $$
> \begin{aligned}
> \mu_{A}\leq \mu_{AB}(X)\leq \mu_{AB}(\widetilde{X})\leq \mu_{B} \\
> \mu_{A}\leq \mu_{BA}(\widetilde{X})\leq \mu_{BA}(X)\leq \mu_{B}
> \end{aligned}
>$$

That is, Ann expects that a more informative experiment will, in expectation, bring Bob's posterior mean closer to Ann's prior, and vice versa. The proposition formalizes the idea that agents expect more informative experiments (those that Blackwell-dominate others) to bring the other agent's belief closer to their own prior belief. 

### Interpretation of the inequalities

#### Expected Posterior Mean is bounded by priors $(\mu_{A}\leq \mu_{AB}(X)\leq \mu_{B})$

Since $f_{\theta}^{B}$ likelihood-ratio dominates $f_{\theta}^{A}$, Bob's prior mean $(\mu_{B})$ is typically higher than Ann's $(\mu_{A})$. 

Ann expects Bob's posterior mean, $\mathbb{E}_{B}[\theta\mid \mid X]$, to lie between their two priors $\mu_{A}$ and $\mu_{B}$. Specifically, Ann expects Bob's posterior mean to be higher than or equal to her own prior mean, but lower than or equal to Bob's prior mean. The proof uses the properties of Likelihood-ratio dominance to ensure that Bob's posterior mean [[First-Order Stochastically Dominant|FOSD]]-dominates Ann's posterior belief for every signal realization $x$. 

#### Informativeness and Convergence $(\mu_{AB}(X)\leq \mu_{AB}(\widetilde{X}))$

Since $X$ assumed to be more informative than $\widetilde{X}$, Ann expects that $X$ will bring Bob's posterior expectation closer to Ann's prior than the less informative signal $\widetilde{X}$. The reverse relationship holds for Bob's expectation about Ann: $\mu_{BA}(\widetilde{X})\leq \mu_{BA}(X)$. 