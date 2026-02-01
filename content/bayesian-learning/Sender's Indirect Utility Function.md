---
up: "[[Bayesian Persuasion]]"
aliases:
tags:
  - concept/definition
  - micro/equilibrium
mathLink-blocks:
  "": ""
  def-senders-indirect-utility-function: $\hat{v}(\mu):= \mathbb{E}_{\mu}[u_{s}(\hat{a}(\mu),\  \theta)]$
created: 2025-11-09 16:34:28
modified: 2026-01-13 05:04:14
---

> [!definition] Definition (Sender's indirect utility function).
> The Sender's expected payoff given belief $\mu$ and Receiver-action $\hat{a}(\mu)$ is defined as
> $$
> \hat{v}(\mu):= \mathbb{E}_{\mu}[u_{s}(\hat{a}(\mu),\  \theta)] 
>$$

^def-senders-indirect-utility-function

where [[Receiver's Optimal Action - Sender-Preferred Equilibrium#^ml-def-receivers-optimal-action]] . 
## Discussion 

The **sender's indirect utility function** is the "payoff landscape" for the sender, plotted over the *Receiver's beliefs*. The sender cannot directly choose $\mu$, but their goal is to design a signal that generates posteriors $\mu_{s}$ that, on average, give a high value of $\hat{v}(\mu)$. 
### Updating and Priors

The receiver's action depends entirely on their updated posterior belief $\mu$. This process is governed by Bayes' Rule. The outcome that any signal $\sigma$ is a distribution over posterior beliefs $\tau$, which must satisfy [[Bayes' Plausible|the expected posterior is equal to the prior]].

The search for the optimal signal structure by the Sender then becomes an optimization problem over all Bayes-plausible distributions $\tau$ that maximize the expected sender payoff $\mathbb{E}_{\tau}(\hat{v}(\mu))$. See [[Value of a Signal (Kamenica-Gentzkow)]] for this characterization. 