---
up: "[[Bayesian Persuasion]]"
aliases:
tags:
  - concept/result
  - micro/information
mathLink-blocks:
  ml-cor-sender-benefits-persuasion-bayes-plausible: $\textbf{Cor. }\text{Beneficial Persuasion}\iff\mathbb{E}_{\tau}[\hat{v}(\mu)]>\hat{v}(\mu_{0})$
---
> [!corollary] Corollary (Sender benefits from Persuasion - Bayes' Plausibility).
> The sender benefits from persuasion if and only if there exists a Bayesian plausible distribution $\tau$ such that $\mathbb{E}_{\tau}[\hat{v}(\mu)]>\hat{v}(\mu_{0})$. 

^ml-cor-sender-benefits-persuasion-bayes-plausible


### Using the Geometric Solution Concept

From the corollary above, the sender benefits from persuasion if and only if the [[Cor (K-G). Value of Optimal Signal|optimal value]] is strictly higher than the payoff they would receive without any information, $\hat{v}(\mu_{0})$. 

Under the [[Bayesian Persuasion - Solution-concept as a Upper Concave Envelope#^ml-def-concave-envelope-sender-indirect-utility]], we can further use the geometric solution-concept to understand when persuasion is valuable/beneficial: 

- If $\hat{v}(\mu)$ is **concave**, then $V(\mu)=\hat{v}(\mu)$ meaning the sender cannot benefit from persuasion. 
- If $\hat{v}(\mu)$ is **strictly convex**, the sender benefits from persuasion for **every** prior belief. 

Formally, 

> [!corollary] Corollary.
> If $\hat{v}$ is concave, then the sender does not benefit from persuasion for **any** prior. If $\hat{v}$ is strictly convex, the Sender benefits from persuasion for **every** prior. 

^ml-cor-sender-benefits-persuasion-shape-value-function

If $\hat{v}(\mu)$ is already concave, then $V(\mu) = \hat{v}(\mu)$ everywhere, meaning no signal can improve upon simply revealing no information (keeping the Receiver at the prior belief). Conversely, when $\hat{v}(\mu)$ exhibits non-concavities—such as discontinuities, kinks, or convex regions—the Sender can exploit these by designing signals that induce posteriors at the "corners" of the concave envelope, strategically placing the Receiver's beliefs where they are most favorable to the Sender.