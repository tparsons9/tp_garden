---
up: "[[Information Theory]]"
aliases:
  - cost of information
tags:
  - micro/information
---
Contrasting with the concepts outlined in [[Blackwell Order]], where we considered [[Decision Problems]] in which the signal informing the agent's decision is given _exogenously_, in many economic applications, agents can acquire information at a _cost_ and thereby control the signal that they observe. Formally, the full problem that an agent faces is often specified as
$$
\max_{\sigma:\Theta\to\Delta(S)}\int_{\Delta(\Theta)} \max_{a \in A} \mathbb{E}_{q}[u(a,\theta)]\,d\tau_{\sigma}(q) - \text{cost of acquiring }\sigma
$$
where $\tau_{\sigma}$ denotes the distribution over posterior beliefs induced by signal $\sigma$.

Two relevant formalizations of cost models are related to the dependence on a given agent's prior. [[Prior-Dependent Information Costs]] describes the cognitive cost of updating existing knowledge (prior) with new information. Conversely, [[Prior-Independent Information Costs]] treat the cost of information as _exogenous_ to the agent, and the cost of acquiring information is constant for all consumers regardless of their individual beliefs and/or expertise. 