---
up: "[[Equilibrium Concepts]]"
aliases:
  - SPNE
  - Subgame Perfect Equilibrium
  - SPE
tags:
  - concept/definition
  - micro/equilibrium
  - micro/repeated-games
---
 A [[Strategy Profile]] $s^{*}$ is a **subgame perfect equilibrium (SPE)** if it constitutes a [[Nash Equilibrium]] in **every subgame** of the game.

Equivalently: the strategies must be sequentially rational. Players optimize at every decision node they might reach, not just along the equilibrium path.

## Intuition

SPE eliminates **non-credible threats**—strategies that would not be optimal if that decision node were actually reached. This ensures that:
- Players commit to strategies they will actually want to follow
- Beliefs about future play are consistent with optimal behavior
- No player has incentive to deviate at any future point

## Solution Method: Backward Induction

For finite games with perfect information:

1. Start at the **last stage**
2. For each player's final decision node, find the action that maximizes their payoff
3. Replace each final subgame with its equilibrium payoff
4. Move backward one stage and repeat
5. Continue until reaching the initial node

**Example:** Two-stage game with entry then oligopoly
- Stage 2: Solve oligopoly game for any configuration of N firms
- Stage 1: Given π(N) from Stage 2, potential entrants decide whether to enter

## Existence

![[Kuhn's Theorem#^ml-thm-kuhn]]

## Key Property

SPE is more restrictive than Nash equilibrium:
- Every SPE is a NE
- Not every NE is an SPE (some involve non-credible threats off the equilibrium path)

