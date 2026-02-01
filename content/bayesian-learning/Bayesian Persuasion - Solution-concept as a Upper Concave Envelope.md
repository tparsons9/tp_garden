---
up: "[[Bayesian Persuasion]]"
aliases:
tags:
  - concept/method
  - micro/information
  - math/convex-analysis
mathLink-blocks:
  ml-def-concave-envelope-sender-indirect-utility: $V(\mu)\equiv \sup \{ z\mid  (\mu,z)\in\text{conv}(\hat{v}) \},\  \forall \mu \in\Delta(\Theta)$
created: 2025-11-09 18:22:22
modified: 2026-01-13 05:04:02
---
This is the geometric method for solving the Sender's problem, which was reframed by the [[Value of a Signal (Kamenica-Gentzkow)]] theorem. 

The value of the optimal signal is found by constructing the [[Upper Concave Envelope]] of the [[Sender's Indirect Utility Function]]. Formally, rewrite the definition of the concave envelope, under the context of the indirect utility, 

> [!definition] Definition (Sender's Value of Information as Upper Concave Envelope of $\hat{v}(\mu)$). 
> 
> $$
> V(\mu)\equiv \sup \{ z\mid  (\mu,z)\in\text{conv}(\hat{v}) \},\  \forall \mu \in\Delta(\Theta)
> $$
> where $\text{conv}(\hat{v})$ denotes the convex hull of the graph $\hat{v}$. That is, $V$ is the smallest concave function that is everywhere weakly greater than $\hat{v}$. 

^ml-def-concave-envelope-sender-indirect-utility

By [[Value of a Signal (Kamenica-Gentzkow)]], and specifically, [[Cor (K-G). Value of Optimal Signal#^ml-cor-bayes-persuasion-value-of-optimal-signal]] , the discussion concludes that the maximization is achieved by splitting the prior into different posterior beliefs, where the highest expected value of $\hat{v}(\mu)$ is a convex combination of these splits and the weighted probabilities. 

That is, the set $\{ z\mid (\mu_{0},z)\in\text{conv}(\hat{v}) \}$ is precisely those expected payoffs the Sender can achieve when the prior is $\mu_{0}$. And so, $V(\mu_{0})=\sup\{ z\mid (\mu_{0},z)\in\text{conv}(\hat{v}) \}$ is the largest payoff the Sender can achieve when the prior is $\mu_{0}$. 

![[e415-1-ch8.pdf#page=6&rect=164,422,437,593|e415-1-ch8, p.6]]

By [[When (Bayesian) Persuasion is valuable]], the Sender strictly benefits whenever $V(\mu_{0})>\hat{v}(\mu_{0})$. 


## Discussion 
