---
up: "[[Bayesian Persuasion]]"
aliases:
tags:
  - concept/theorem
---
By Kamenica & Gentzkow (2011), the signal's *value* is the Sender's (ex-ante) [[Expected payoff of a strategy given a belief|expected payoff]] given choice of that signal. It provides a simplification of the [[Bayesian Persuasion]] problem, where the Sender's problem of choosing an optimal signal $\sigma$ is equivalent to choosing an optimal [[Bayes' Plausible]] distribution of posteriors $\tau$. 

> [!theorem] Theorem (Kamenica and Gentzkow (2011)).
> The following are equivalent:
> 1. There exists a (finite-valued) signal with value $v^{\ast}$.
> 2. There exists a (finite-valued) signal taking realizations $S\subseteq A$ with value $v^{\ast}$. 
> 3. There exists a Bayes-plausible distribution over posterior beliefs, $\tau \in\Delta(\Delta(\Theta))$ such that $\mathbb{E}_{\tau}[\hat{v}(\mu)]=v^{\ast}$. 

See [[Proof of Kamenica & Gentzkow (2011)]].
## Discussion

The problem is reframed in the sense: Instead of searching over all possible signal functions $\sigma:\Theta\to\Delta(S)$, the Sender's problem can be written as, 

**Find a distribution of posteriors $\tau$ to maximize $\mathbb{E}_{\tau}[\hat{v}(\mu)]$ subject to $\int \mu\,d\tau(\mu)=\mu_{0}$**. 

Where,
- $\hat{v}(\mu)$ is the [[Sender's Indirect Utility Function]]
- $\mathbb{E}_{\tau}[\hat{v}(\mu)]$ is the Sender's expected payoff over all possible posterior beliefs
- The constraint is that the distribution $\tau$ must be Bayes-plausible 

This is formalized in the following corollary: 

![[Cor (K-G). Value of Optimal Signal#^ml-cor-bayes-persuasion-value-of-optimal-signal]]

In words, it tells us that we can determine when the Sender benefits from persuasion by studying how $\mathbb{E}_{\tau}[\hat{v}(\mu)]$ varies over the set of Bayes-plausible distributions. See [[When (Bayesian) Persuasion is valuable]].

Finally, it yields the [[Bayesian Persuasion - Solution-concept as a Upper Concave Envelope]]. 