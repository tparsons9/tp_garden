---
up: "[[Common Learning]]"
aliases:
tags:
  - concept/lemma
  - bayes/learning
---
This lemma provides the necessary and sufficient conditions for common learning.

> [!lemma] Lemma (Common Learning via Evident q-Belief).
> Agents commonly learn if and only if, for every $\theta \in\Theta$ and $q\in(0,1)$, there is a sequence of events $F_{t}$ and a period $T$ such that for all $t>T$, 
> 1. $F_{t}\subseteq B_{t}^{q}(\theta)$ (The true state $\theta$ is [[p-belief|q-believed]] when $F_{t}$ occurs)
> 2. $P_{\theta}(F_{t})>q$ (the probability of $F_{t}$ is sufficiently high under true state $\theta$)
> 3. $F_{t}\subseteq B_{it}^{q}(F_{t})$ for $i=1,2$ ($F_{t}$  is evident q-belief at time $t$"). 

The intuition behind the lemma lies in characterizing the [[Common p-Belief|common q-belief]] through an [[Evident Event|evident event]], which generalizes the third definition of [[Common Knowledge#^36d26e|Common Knowledge - Evident Events]]. An event $E$ is **evident** $p$-belief if, when $E$ occurs, every agent $p$-beliefs $E$ to be true. The common $p$-belief of an event $A$ at a state $\omega$ is established if there exists an evident $p$-belief event $E$ such that $\omega \in E$, and $E$ implies that all agents $p$-believe $A$. 

In the context of [[Bayesian Learning]], the sequence of events $F_{t}$ serves this purpose. 

## Discussion 

### Decomposition of the Conditions

- $F_{t}\subseteq B_{t}^{q}(\theta)$
	- Ensures that if the event $F_{t}$ occurs, then the state $\theta$ is $q$-believed by everyone 
- $F_{t}\subseteq B_{it}^{q}(F_{t})$ 
	- ensures that the event $F_{t}$ *itself* is an evident $q$-belief. If the learning history falls into $F_{t}$, both agents are confident (with probability $\geq q$) that $F_{t}$ has occurred. 
	- When both $(1)$ and $(3)$ are met, $F_{t}$ acts as a public signal that triggers common $q-$belief in $\theta$. Since the event is evident $q$-belief $(3)$ and implies $q$-belief $\theta$ (1), the occurrence of $F_{t}$ establishes that all agents $q$-believe $\theta$, and all agents $q$-believe that everyone $q$-believes $\theta$, and so on, recursively, leading to the common $q$-belief in $\theta$. 
- $P_{\theta}(F_{t})>q$
	- ensures that this enabling event $F_{t}$ must happen with high probability $q$ under the true parameter $\theta$, guaranteeing that [[Common Learning|common learning]] happens almost surely as $t$ increases. 

>[!insight]
>The lemma provides a shortcut: instead of checking the infinite sequence of $q$-beliefs required by the definition of $C_{t}^{q}(\theta)$, we only need to construct a single, sufficiently probable event $F_{t}$ that is self-evidently $q$-believed and implies $q$-belief in $\theta$. 


### Importance 

The lemma provides the **necessary and sufficient** analytical tool to prove propositions about common learning in different [[Information Structure|information structures]]. It transforms the complex recursive definition of [[Common p-Belief]] into three conditions that can be verified for sequences of events $F_{t}$. 

Further, it provides the framework in the [[Proof of Crips et al. Conditional Independence]], where agents learn individual $\theta$, and their signals are conditional independent given $\theta$, then they commonly learn $\theta$. 

